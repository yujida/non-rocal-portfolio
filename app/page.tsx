'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { photos, projectNote, type Photo } from '../data/photos';

const sectionIds = ['intro', ...photos.map((photo) => photo.id), 'about'];

function padNumber(value: number) {
  return String(value).padStart(2, '0');
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('intro');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const activePhotoIndex = useMemo(() => {
    const foundIndex = photos.findIndex((photo) => photo.id === activeSection);
    return foundIndex === -1 ? null : foundIndex;
  }, [activeSection]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => sectionRefs.current[id])
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: [0.35, 0.5, 0.7] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedPhoto) {
        if (event.key === 'Escape') setSelectedPhoto(null);
        return;
      }

      const currentIndex = sectionIds.indexOf(activeSection);
      const scrollToIndex = (targetIndex: number) => {
        const nextIndex = clamp(targetIndex, 0, sectionIds.length - 1);
        const targetId = sectionIds[nextIndex];
        sectionRefs.current[targetId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };

      if (event.key === 'ArrowDown' || event.key === 'ArrowRight' || event.key === 'PageDown') {
        event.preventDefault();
        scrollToIndex(currentIndex + 1);
      }

      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft' || event.key === 'PageUp') {
        event.preventDefault();
        scrollToIndex(currentIndex - 1);
      }

      if (event.key === 'Home') {
        event.preventDefault();
        scrollToIndex(0);
      }

      if (event.key === 'End') {
        event.preventDefault();
        scrollToIndex(sectionIds.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection, selectedPhoto]);

  useEffect(() => {
    document.body.style.overflow = selectedPhoto ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPhoto]);

  const registerSection = (id: string) => (node: HTMLElement | null) => {
    sectionRefs.current[id] = node;
  };

  return (
    <main className="site-shell">
      <header className="fixed-header" aria-label="사이트 진행 표시">
        <a href="#intro" className="brand-mark" aria-label="인트로로 이동">
          〈非RO컬〉
        </a>
        <div className="progress-mark" aria-live="polite">
          {activePhotoIndex === null ? (activeSection === 'about' ? 'about' : 'intro') : `${padNumber(activePhotoIndex + 1)} / ${padNumber(photos.length)}`}
        </div>
      </header>

      <nav className="dot-nav" aria-label="사진 바로가기">
        <a className={activeSection === 'intro' ? 'is-active' : ''} href="#intro" aria-label="인트로" />
        {photos.map((photo) => (
          <a
            key={photo.id}
            className={activeSection === photo.id ? 'is-active' : ''}
            href={`#${photo.id}`}
            aria-label={`${photo.id}. ${photo.title}`}
          />
        ))}
        <a className={activeSection === 'about' ? 'is-active' : ''} href="#about" aria-label="작품 설명" />
      </nav>

      <section id="intro" className="panel intro-panel" ref={registerSection('intro')}>
        <div className="intro-copy">
          <p className="eyebrow">photographs and text</p>
          <h1>〈非RO컬〉</h1>
          <p className="author">사진·글 박상욱</p>
          <p className="project-note">{projectNote}</p>
          <a className="enter-link" href="#01" aria-label="첫 번째 사진으로 이동">
            사진 보기
          </a>
        </div>
      </section>

      {photos.map((photo, index) => (
        <PhotoPanel
          key={photo.id}
          photo={photo}
          index={index}
          registerSection={registerSection}
          onSelect={setSelectedPhoto}
        />
      ))}

      <section id="about" className="panel about-panel" ref={registerSection('about')}>
        <div className="about-grid">
          <div>
            <p className="eyebrow">project statement</p>
            <h2>〈非RO컬〉</h2>
          </div>
          <div className="about-copy">
            <p>{projectNote}</p>
            <p>
              사진은 한 장씩 독립된 화면으로 배치했다. 제목과 한 줄 설명은 사진을 대신 설명하지 않고,
              장면을 보는 속도만 조절한다.
            </p>
            <dl className="credit-list">
              <div>
                <dt>사진·글</dt>
                <dd>박상욱</dd>
              </div>
              <div>
                <dt>작품 수</dt>
                <dd>{photos.length}점</dd>
              </div>
            </dl>
            <a className="enter-link" href="#intro">
              처음으로 돌아가기
            </a>
          </div>
        </div>
      </section>

      {selectedPhoto && <Lightbox photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />}
    </main>
  );
}

function PhotoPanel({
  photo,
  index,
  registerSection,
  onSelect
}: {
  photo: Photo;
  index: number;
  registerSection: (id: string) => (node: HTMLElement | null) => void;
  onSelect: (photo: Photo) => void;
}) {
  return (
    <section id={photo.id} className="panel photo-panel" ref={registerSection(photo.id)}>
      <figure className="photo-stage">
        <button className="photo-button" type="button" onClick={() => onSelect(photo)} aria-label={`${photo.title} 크게 보기`}>
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            className="portfolio-image"
            sizes="(max-width: 768px) 94vw, 86vw"
            priority={index < 2}
          />
        </button>
        <figcaption className="caption-block">
          <p className="photo-number">{padNumber(index + 1)}</p>
          <div>
            <h2>{photo.title}</h2>
            <p>{photo.description}</p>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}

function Lightbox({ photo, onClose }: { photo: Photo; onClose: () => void }) {
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${photo.title} 확대 보기`}>
      <button className="close-button" type="button" onClick={onClose} aria-label="닫기">
        닫기
      </button>
      <div className="lightbox-image-wrap">
        <Image src={photo.src} alt={photo.alt} fill sizes="100vw" className="lightbox-image" priority />
      </div>
      <div className="lightbox-caption">
        <strong>{photo.title}</strong>
        <span>{photo.description}</span>
      </div>
    </div>
  );
}

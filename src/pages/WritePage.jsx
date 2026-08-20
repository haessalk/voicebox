import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhotoUpload from '../components/PhotoUpload';
import { CATEGORIES } from '../data/posts';
import styles from './WritePage.module.css';

export default function WritePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [photo, setPhoto] = useState(null);
  const [errors, setErrors] = useState({});

  function handlePhotoChange(file) {
    if (photo?.previewUrl) URL.revokeObjectURL(photo.previewUrl);
    setPhoto(file ? { file, previewUrl: URL.createObjectURL(file) } : null);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = {};
    if (!title.trim()) nextErrors.title = '제목을 입력해 주세요.';
    if (!content.trim()) nextErrors.content = '내용을 입력해 주세요.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // 저장 기능은 아직 연결되지 않았습니다 — 화면 흐름만 확인합니다.
    navigate('/');
  }

  return (
    <div className={styles.content}>
      <h1 className={styles.pageTitle}>의견 쓰기</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label className="field-label" htmlFor="title">
            제목
          </label>
          <input
            id="title"
            className={`input-field ${errors.title ? 'error' : ''}`}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="예: 골목 가로등이 계속 꺼져 있어요"
          />
          {errors.title && <p className="field-error-text">{errors.title}</p>}
        </div>

        <div className={styles.field}>
          <label className="field-label" htmlFor="content">
            내용
          </label>
          <textarea
            id="content"
            className={`textarea-field ${errors.content ? 'error' : ''}`}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="겪은 불편이나 제안을 자세히 적어주세요."
          />
          {errors.content && <p className="field-error-text">{errors.content}</p>}
        </div>

        <div className={styles.field}>
          <span className="field-label">분야</span>
          <div className={styles.categoryRow}>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                className={`chip-category ${category === c ? 'active' : ''}`}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.field}>
          <span className="field-label">사진 첨부</span>
          <PhotoUpload photo={photo} onChange={handlePhotoChange} />
        </div>

        <div className={styles.actions}>
          <button type="button" className="btn-secondary" onClick={() => navigate(-1)}>
            취소
          </button>
          <button type="submit" className="btn-primary">
            등록
          </button>
        </div>
      </form>
    </div>
  );
}

import { useRef } from 'react';
import PhotoIcon from './PhotoIcon';
import styles from './PhotoUpload.module.css';

export default function PhotoUpload({ photo, onChange }) {
  const inputRef = useRef(null);

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    onChange(file);
    e.target.value = '';
  }

  function handleRemove(e) {
    e.stopPropagation();
    onChange(null);
  }

  if (photo) {
    return (
      <div className={styles.preview}>
        <img className={styles.thumb} src={photo.previewUrl} alt="첨부한 사진 미리보기" />
        <button type="button" className={styles.remove} onClick={handleRemove} aria-label="사진 삭제">
          ×
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      className={styles.dropzone}
      onClick={() => inputRef.current?.click()}
    >
      <PhotoIcon size={26} />
      <span>사진 추가 (선택, 최대 1장)</span>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
    </button>
  );
}

function Controls({ activeIdx, content, changeIdx }) {
  return (
    <section>
      <button
        type="button"
        disabled={activeIdx === 0}
        onClick={() => changeIdx(-1)}
      >
        Назад
      </button>
      <button
        type="button"
        disabled={activeIdx === content.length - 1}
        onClick={() => changeIdx(1)}
      >
        Вперед
      </button>
    </section>
  );
}

export { Controls };

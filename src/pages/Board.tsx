import React from 'react';

import { ISSUE_STATE } from '../constants/constants';

const Board = () => {
  return (
    <article>
      {ISSUE_STATE.map((item, idx) => {
        return <section>안뇽</section>;
      })}
    </article>
  );
};

export default Board;

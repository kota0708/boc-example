import React from 'react';

const newlineRegex = /(\r\n|\r|\n)/g;

const nl2br = str => {
  if (typeof str === 'number') {
    return str;
  }
  return str.split(newlineRegex).map((line, i) => {
    if (line.match(newlineRegex)) {
      return <br key={`nl2br__${i}`} />;
    }
    return line;
  });
};

export default nl2br;

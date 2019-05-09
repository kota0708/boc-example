// @flow
import React from 'react';
import Helmet from 'react-helmet';

type Props = {
  description: string,
  lang: string,
  title: string
};

const Seo = (props: Props) => {
  const { lang, title, description } = props;
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      meta={[
        {
          name: 'description',
          content: description
        }
      ]}
    />
  );
};

export default Seo;

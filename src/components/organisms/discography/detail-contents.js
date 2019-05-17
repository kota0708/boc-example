// @flow
import React from 'react';
import styled from 'styled-components';

// import { SIZE_LG } from '../../../constants/styles/size';

import AlbumHeading from '../../molecules/discography/detail/album-heading';
import AlbumContents from '../../molecules/discography/detail/album-contents';

import PanelList from '../panel-list';


type Props = {
  data?: Array<Object>, // アルバムのデータを受け取る
};

const Wrap = styled.div`
  padding-top: 80px;
`;

const Inner = styled.div`
  margin-bottom: 80px;

  :last-child {
    margin-bottom: 0;
  }
`;

const ContentsWrap = styled.div`
  padding: 0 25px;
  margin-bottom: 40px;
`;

const AlbumContentsWrap = styled.div`
  margin-bottom: 42px;

  :last-child {
    margin-bottom: 0;
  }
`;

const PanelListWrap = styled.div`
  padding: 45px 25px 90px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto 0;
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0.22;
    background: ${props => props.theme.colors.gradation};;
    z-index: -1;
  }
`;

const PanelText = styled.p`
  font-size: 14px;
  font-size: 1.4rem;
  font-weight: normal;
  line-height: 1.71;
  letter-spacing: 0.0004em;
  margin-bottom: 35px;
`;

const DetailContents = (props: Props) => {
  const { data } = props;

  const contents = data.map((r, i) => (
    <Inner key={i}>
      <ContentsWrap>
        <AlbumHeading
          imgUrl={r.imgUrl}
          title={r.title}
          description={r.description}
        />
      </ContentsWrap>
      <ContentsWrap>
        {r.list.map((albumLists, index) => (
          <AlbumContentsWrap key={index}>
            <AlbumContents
              title={albumLists.title}
              lists={albumLists.lists}
            />
          </AlbumContentsWrap>
        ))}
      </ContentsWrap>
      <PanelListWrap>
        <PanelText>購入はこちら</PanelText>
        <PanelList data={r.albumLink} />
      </PanelListWrap>
    </Inner>
  ));

  return (
    <Wrap>
      {contents}
    </Wrap>
  );
};

DetailContents.defaultProps = {
  // 仮のデータです
  // TODO: 後でJSONかjsで外部化する
  data: [
    {
      imgUrl: '/images/photos/0.jpg',
      title: 'Blu-ray初回限定盤',
      description: 'スペシャルBOX仕様\n豪華120ページフォトブックレット＆歌詞カード付き\nTFXQ-78165 / ¥8,000＋税',
      list: [
        {
          title: '収録曲',
          lists: [
            {
              label: '01',
              name: 'pathfinder'
            },
            {
              label: '02',
              name: 'GO'
            },
            {
              label: '03',
              name: '天体観測'
            },
            {
              label: '04',
              name: 'ray'
            }
          ]
        },
        {
          title: '収録曲',
          lists: [
            {
              label: '01',
              name: 'pathfinder'
            },
            {
              label: '02',
              name: 'GO'
            },
            {
              label: '03',
              name: '天体観測'
            },
            {
              label: '04',
              name: 'ray'
            }
          ]
        }
      ],
      albumLink: [
        {
          name: 'TOWER RECORDS',
          link: '/'
        },
        {
          name: 'HMV',
          link: '/'
        },
        {
          name: 'TSUTAYA',
          link: '/'
        },
        {
          name: 'Amazon',
          link: '/'
        }
      ]
    },
    {
      imgUrl: '/images/photos/0.jpg',
      title: 'Blu-ray初回限定盤',
      description: '28ページフォトブックレット付き\nTFXQ-78166 / ¥6,000＋税',
      list: [
        {
          title: '収録曲',
          lists: [
            {
              label: '01',
              name: 'pathfinder'
            },
            {
              label: '02',
              name: 'GO'
            },
            {
              label: '03',
              name: '天体観測'
            },
            {
              label: '04',
              name: 'ray'
            }
          ]
        },
        {
          title: '収録曲',
          lists: [
            {
              label: '01',
              name: 'pathfinder'
            },
            {
              label: '02',
              name: 'GO'
            },
            {
              label: '03',
              name: '天体観測'
            },
            {
              label: '04',
              name: 'ray'
            }
          ]
        }
      ],
      albumLink: [
        {
          name: 'TOWER RECORDS',
          link: '/'
        },
        {
          name: 'HMV',
          link: '/'
        },
        {
          name: 'TSUTAYA',
          link: '/'
        }
      ]
    },
    {
      imgUrl: '/images/photos/0.jpg',
      title: 'Blu-ray初回限定盤',
      description: '28ページフォトブックレット付き\nTFXQ-78166 / ¥6,000＋税',
      list: [
        {
          title: '収録曲',
          lists: [
            {
              label: '01',
              name: 'pathfinder'
            },
            {
              label: '02',
              name: 'GO'
            },
            {
              label: '03',
              name: '天体観測'
            },
            {
              label: '04',
              name: 'ray'
            }
          ]
        },
        {
          title: '収録曲',
          lists: [
            {
              label: '01',
              name: 'pathfinder'
            },
            {
              label: '02',
              name: 'GO'
            },
            {
              label: '03',
              name: '天体観測'
            },
            {
              label: '04',
              name: 'ray'
            }
          ]
        },
        {
          title: '収録曲',
          lists: [
            {
              label: '01',
              name: 'pathfinder'
            },
            {
              label: '02',
              name: 'GO'
            },
            {
              label: '03',
              name: '天体観測'
            },
            {
              label: '04',
              name: 'ray'
            }
          ]
        }
      ],
      albumLink: [
        {
          name: 'TOWER RECORDS',
          link: '/'
        },
        {
          name: 'HMV',
          link: '/'
        }
      ]
    }
  ]
};

export default DetailContents;

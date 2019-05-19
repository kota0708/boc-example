/* @flow */
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'gatsby';
import { TweenLite } from 'gsap';
import Slider from 'react-slick';

import { reduce } from 'lodash';

import styled from 'styled-components';

import BgImage from '../../molecules/photos/top/bg-image';
import Heading from '../../molecules/photos/heading';

import photoData from '../../../constants/stub/photo-list-data';

type Props = {
  data?: Array<Object> // photoのデータを受け取る
};

const Wrap = styled.div`
  width: 100%;
  padding-top: 80px;
`;

const HeadingWrap = styled.div`
  padding: 0 25px;
  margin-bottom: 34px;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* 100 * 490 (ImageHeight)/375 (ImageWidth) */
  padding-bottom: 130.7%;
  display: block;
`;

const BgImagesInner = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const SlideWrap = styled.div`
  width: 100%;
  position: absolute;
  bottom: 80px;
  left: 0;
  z-index: 1;
`;

const StyledImageLink = styled(Link)`
  margin: 0 10px;
  display: block;
  text-decoration: none;
  transform: translate3d(20px, 0, 0);
`;

const SlideImage = styled.img`
  width: 80px;
  height: 80px;
  display: block;
`;

const BorderWrap = styled.div`
  width: 80px;
  height: 80px;
  display: block;
  position: absolute;
  top: 0;
  /* translateXの20px + marginの10px */
  left: 30px;
  z-index: 3;
`;

const BorderInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Border = styled.span`
  width: 1px;
  height: calc(100% + 10px);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 100%; /* ここの値を動かせば線が動きます */
  margin: auto 0;
  background-color: #fff;
`;

const PhotoTop = (props: Props) => {

  const { data } = props;

  // Domを格納する変数
  let currentDom = useRef(null); // 現在選択されているDOMを格納
  let slickWrapDom = useRef(null); // slickをラップしているDOM
  let listsDom = null; // スライドのDOM全て
  let slickDom = useRef(null); // react-slickを格納、Methodsを使いたい時に使う
  let borderDom = null; // 線のDOMを格納

  // state
  const [getCurrent, updateCurrent] = useState(0);

  // mount
  useEffect(() => {

    // 現在選ばれてるDOMを格納
    currentDom = slickWrapDom.querySelector('.slick-current');

    /**
     * 一応定義してますがいらない場合は削除してください。
     * 参考ページ
     * https://react-slick.neostack.com/docs/api/#methods
     * @example
     * <button
     *  onClick={e => {
     *    e.preventDefault();
     *    slickDom.slickNext(); // 次のページに進む
     *  }}
     * />
     */
    console.log(slickDom);

    // 線のDOMです。
    console.log(borderDom);

    // 現在選ばれてるslideは消す
    TweenLite.set(currentDom, {
      opacity: 0
    });
  }, []);

  // 背景の画像
  // データがなにもない場合は表示させない
  const BgImages = (data.length !== 0) ? (
    data.map((r, i) => (
      // 現在のスライドとfor文のindexで表示、非表示を切り替え
      (getCurrent === i)
          && (
          <BgImagesInner key={i}>
            <BgImage
              imgUrl={`/images/photos/${r.data[0].photos[0].filename}`}
            />
          </BgImagesInner>
          )
    ))
  ) : null;

  // slideのimage
  // データがなにもない場合は表示させない
  const Images = (data.length !== 0) ? (
    data.map((r, i) => (
      <StyledImageLink
        to={`/photos/list/?id=${r.id}`}
        key={i}
      >
        <SlideImage
          src={`/images/photos/${r.data[0].photos[0].filename}`}
        />
      </StyledImageLink>
    ))
  ) : null;

  const heading = (
    (data.length !== 0) ? (
      <Heading
        title={data[getCurrent].title}
        amount={reduce(data[getCurrent].data, (a, b) => a + b.photos.length, 0)}
      />
    ) : null
  );

  // スライドのオプション
  const params = {
    variableWidth: true,
    draggable: true,
    arrows: false,
    adaptiveHeight: true,
    /**
     * スライドが終わった時に発火
     * @param {number} current - 現在の位置
     */
    afterChange: current => {
      currentDom = slickWrapDom.querySelector('.slick-current'); // 現在選ばれているDOMを格納

      // 新しくdomが生成されるのでもう一度すべてのDOMを取得
      listsDom = slickWrapDom.querySelectorAll('.slick-slide');

      updateCurrent(current); // 現在位置(number)を格納

      listsDom.forEach(r => {
        if (!r.classList.contains('slick-current')) {
          TweenLite.to(r, 0.5, {
            opacity: 1
          });
        } else {
          TweenLite.to(currentDom, 0.5, {
            opacity: 0
          });
        }
      });
    }
  };

  return (
    <Wrap>
      <HeadingWrap>
        {heading}
      </HeadingWrap>
      <Container
        ref={el => {
          slickWrapDom = el;
        }}
      >
        {BgImages}
        <SlideWrap>
          <BorderWrap>
            <BorderInner>
              <Border
                ref={el => {
                  borderDom = el;
                }}
              />
            </BorderInner>
          </BorderWrap>
          <Slider
            {...params}
            ref={el => {
              slickDom = el;
            }}
          >
            {Images}
          </Slider>
        </SlideWrap>
      </Container>
    </Wrap>
  );
};

PhotoTop.defaultProps = {
  data: photoData.data
};

export default PhotoTop;

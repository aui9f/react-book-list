import React from 'react';

const Review = () => {
    return (
        <div className='review'>
            <div>TODO 필터링[대기, 읽는중, 완료] [책검색] [기간검색]</div>
            <ul>
            <li>
                    <div>
                        <div className='img'></div>
                        <div className='txt'>
                            <div className='book-info'>
                                <small>책에 대한 간단한 내용</small>
                                <h4>책제목</h4>
                                <p>
                                    <span>ㅇㅇ지음</span> | 
                                    <span>출판사</span> | 
                                    <span>YYYY년 MM월 DD일</span>
                                </p>
                            </div>
                            <div className='user-info'>
                                <div className="star">@@@@@</div>
                                <p>책 읽은날: 2022년 04월 14일</p>
                                <p>리뷰 작성 유무: </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div>
                        <div className='img'></div>
                        <div className='txt'>
                            <div className='book-info'>
                                <small>책에 대한 간단한 내용</small>
                                <h4>책제목</h4>
                                <p>
                                    <span>ㅇㅇ지음</span> | 
                                    <span>출판사</span> | 
                                    <span>YYYY년 MM월 DD일</span>
                                </p>
                            </div>
                            <div className='user-info'>
                                <div className="star">@@@@@</div>
                                <p>책 읽은날: 2022년 04월 14일</p>
                                <p>리뷰 작성 유무: </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Review;
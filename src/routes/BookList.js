import React, { Component } from 'react';

class BookList extends Component {

    state = {
        best: [],
        todo: [],
    }

    getBookBest = async () => {
        const best = [
            {id: 1, name: '파친코1', writer: '이민진', publish: '문학사상', range: 8.67},
            {id: 2, name: '파친코2', writer: '이민진', publish: '문학사상', range: 9},
            {id: 3, name: '가불 선진국', writer: '조국', publish: '메디치미디어', range: 0},
            {id: 4, name: '위대한 국민의 나라', writer: '문재인대통령 비서실', publish: '한스미디어', range: 0},
            {id: 5, name: '불편한 편의점', writer: '김호연', publish: '나무옆의자', range: 8.84},
        ];
        this.setState({best})
    }
    getBookTodo = async () => {
        const todo = [
            {id: 1, title: '역사의 쓸모', writer: '최태성', subtitle: '<h5>길을 잃고 방황할 때마다 나는 역사에서 답을 찾았다!</h5><p>수백 년 전 이야기로 오늘의 고민을 해결하는 방법을 알려주는 실용적인 역사 사용 설명서 『역사의 쓸모』. 지난 20여 년간 500만 명의 가슴을 울린 대한민국 대표 역사 강사 최태성. 선택의 기로에 설 때마다 역사에서 답을 찾은 저자는 삶이라는 문제에 대한 가장 완벽한 해설서는 역사라고 말한다. 도저히 풀리지 않는 문제에 부딪쳤을 때 해설에서 도움을 얻듯, 우리보다 앞서 살았던 인물들의 선택과 그 결과가 담긴 역사에서 인생의 실마리를 얻을 수 있기 때문이다.</p>', endDate: ''},
            {id: 2, title: '긍정의 배신', writer: '바버라 에런라이크', subtitle: '<h5>긍정적 사고는 어떻게 우리의 발등을 찍는가</h5><p>『긍정의 배신』은 사회비평가 바버라 에런라이크가 자본주의와 철저한 공생 관계를 맺고 있는 긍정 이데올로기의 문제점을 전방위적으로 파헤친 책이다. 미국의 신사상 운동에서 대통해 신복음주의 교회 및 기업계와 결합하면서 발전한 긍정주의가 현대 사회에 들어서 우리 삶의 어떤 부분까지 깊숙이 개입하였는지 살펴보고, 이러한 긍정주의가 낳은 폐해에 대해 분석한다. 특히 긍정주의는 개인을 넘어서 전 세계에 닥친 위기의 징후에 눈감게 만들어 재앙에 대비하는 힘을 약화시키고 나아가 실패의 책임을 개인의 긍정성 부족으로 돌림으로써 시장경제의 잔인함을 변호한다고 설명한다. 그리고 기업과 국가가 이러한 긍정주의를 어떤 식으로 이용하고 있는지 다양한 사례를 통해 흥미진진하게 살펴본다.</p>', endDate: ''},
            {id: 3, title: '너의 췌장을 먹고 싶어', writer: '스미노 요루', subtitle: '<h5>잔혹한 비밀을 가진 소녀와 임시 친구 계약을 맺은 소년의 이야기!</h5><p>2016년 일본 서점 대상 2위에 오른 스미노 요루의 첫 소설이다. 시한부 선고를 받은 소녀와 함께한 어느 소년의 이야기를 그리고 있다. ‘요루노 야스미’라는 필명으로 소설 투고 웹사이트 〈소설가가 되자〉에 원고를 올리기 시작한 것이 이 작품의 시작이었다.</p>', endDate: ''},
            {id: 4, title: '그냥 하지 말라', writer: '송길영', subtitle: '<h5>대한민국 최고의 데이터 분석가 송길영이 바라본 10년의 변화상, 10년의 미래상</h5><p>우리는 흔히 ‘미래를 알 수 없다’고 생각하지만, 그렇지 않다. 과거와 지금을 보고, 그 안에 담긴 사람들의 욕망을 이해할 수 있으면 미래의 변화를 상당 부분 알 수 있다. 자타공인 대한민국 최고의 데이터 분석가 송길영은 20여 년간 분석해온 빅데이터를 바탕으로 사람들의 일상이 어떻게 달라졌고, 생각이 어떻게 변화했는지 추적한다. 그럼으로써 앞으로 일어날 변화의 주요 축, 우리 사회의 가치관, 그에 맞는 개인과조직의 성장문법을 제시한다. 미래에도 나만의 전문성이 있는 삶, 주도권을 잃지 않는 삶을 꿈꾼다면, 저자의 안내를 받으며 우리 마음이 그려내는 미래를 미리 탐험해보자.</p>', endDate: ''},
            {id: 5, title: ' 킹 세종 더 그레이트', writer: '조 메노스키', subtitle: '<h5>만약 유럽의 어떤 지도자가 백성을 위해 글자를 만들었다면 전 세계는 이미 그 사실을 알았을 겁니다.</h5><p>세계적으로 성공한 미국 드라마 ‘스타트렉’의 작가인 조 메노스키는 5년 전 처음으로 ‘한글’을 접하며 세종대왕과 만났다. 그를 매료시킨 것은 한글이 가진 기능과 우수성이 아니라 이 모든 것을 한 사람의 왕이 만들어냈다는 것이었고, 그가 만약 유럽의 왕이었다면 이미 그 이야기를 영화와 드라마, 책으로 출간해 세계가 모두 알 수 있도록 했을 것이라는 점이었다.</p>', endDate: ''}
        ]
        this.setState({todo})
    }

    componentDidMount(){
        this.getBookBest();
        this.getBookTodo();
      }


    render(){
        const {best, todo}= this.state;
        
        return (
            <div className='book-list'>
    
                <div className="book-list-best">
                    <h3>베스트 셀러</h3>
                    <ul>
                        {best.map(book=>{
                            return <li><div>
                                    <div className="cover"></div>
                                    <p>{book.name}</p>
                                    <dl>
                                    <dt>저자</dt>
                                    <dd>{book.writer}</dd>
                                    </dl>
                                    <dl>
                                        <dt>출판</dt>
                                        <dd>{book.publish}</dd>
                                    </dl>
                                    <dl>
                                        <dt>평점</dt>
                                        <dd>{book.range}</dd>
                                    </dl>
                                </div></li>
                        })}
                      
                    </ul>
                </div>
                
                <div class="book-list-todo">
                    <h3>독서모임 선정한 책</h3>
                    <ul>
                        {todo.map(book=>{
                            return <li><div>
                                    <div className="cover"></div>
                                    <div className="text">
                                    <h4>{book.title}<small>{book.writer}</small></h4>
                                    
                                    <div className="subtitle" dangerouslySetInnerHTML={ {__html: book.subtitle} }></div>
                                    </div>
                                </div></li>
                        })}
                      
                    </ul>
                </div>
    
            </div>
        )
    }
    
}
export default BookList;
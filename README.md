# react-query-hydrate

React query의 hydrate를 적용한 샘플코드입니다.

# page 구성

- /with-hydrate : hydrate를 적용한 페이지
- /without-hydrate : hydrate를 적용하지 않은 페이지

# 설명

react query의 useQuery는 별도의 설정을 하지 않으면 page 진입시 api 호출이 일어나는데, react query에서 별도로 지원하는 hydrate를 적용하면 server side에서 받아온 API를 client side에서 재호출하지 않게 설정할 수 있습니다.
이는 한번에 많은 양의 데이터를 불러오는 api에 유용하며, 페이지가 로드될떄 빈 화면이 보이지 않아 별도의 로딩이나 스켈레톤 이미지 처리를 하지 않아도 된다는 장점이 있습니다.

window.STUDY_DATA = [
  {
    "id": 1,
    "title": "응용 프로그램과 소켓",
    "concept": "응용 프로그램은 HTTP 같은 메시지를 만들고 소켓을 통해 전송 계층의 서비스를 사용한다. IP와 포트는 통신 끝점을 구분하며, 포트가 물리적 연결 구멍이라는 뜻은 아니다.",
    "prompt": "한 서버에서 웹과 메일 서비스를 동시에 제공할 때 가장 적절한 설명은?",
    "options": [
      {
        "text": "클라이언트는 포트를 사용하지 않는다",
        "why": "클라이언트에도 통신을 구분할 포트가 있다. 보통 연결을 시작할 때 임시 포트를 배정받는다.",
        "correct": false
      },
      {
        "text": "같은 IP에서도 서로 다른 포트로 서비스의 통신 끝점을 구분할 수 있다",
        "why": "IP는 호스트를 식별하고 포트는 그 안의 통신 끝점을 구분한다. 따라서 IP 하나에 여러 서비스가 가능하다.",
        "correct": true
      },
      {
        "text": "IP 하나는 반드시 프로그램 하나에만 대응한다",
        "why": "주소와 응용 프로그램은 일대일 관계가 아니다. 포트와 소켓으로 여러 통신을 구분한다.",
        "correct": false
      },
      {
        "text": "소켓은 HTTP 메시지를 대신 작성하는 웹 문서다",
        "why": "소켓은 응용이 통신 서비스를 사용하는 인터페이스다. 메시지의 의미와 형식은 응용 프로토콜이 정한다.",
        "correct": false
      }
    ],
    "steps": [
      "호스트 구분에는 IP, 호스트 안의 통신 끝점 구분에는 포트를 사용한다.",
      "클라이언트와 서버 모두 소켓을 사용한다. 서버의 알려진 포트와 클라이언트의 임시 포트를 구분한다."
    ],
    "model": "하나의 서버 IP에 웹과 메일 서비스를 함께 운영할 수 있다. 전송 계층이 포트로 통신 끝점을 구분하고 응용 프로그램은 소켓을 통해 데이터를 주고받는다.",
    "remember": "IP로 호스트, 포트로 통신 끝점",
    "evidence": "2장 교안: 응용 계층·소켓, 기존 정리 5절",
    "level": "기초",
    "extra": false,
    "source": "notes.html"
  },
  {
    "id": 2,
    "title": "URL과 프래그먼트",
    "concept": "URL은 스킴, 호스트, 포트, 경로, 쿼리, 프래그먼트 등으로 나눈다. 일반적인 HTTP 요청에서 # 뒤의 프래그먼트는 서버에 보내는 요청 대상에 포함되지 않는다.",
    "prompt": "https://example.com:443/shop?id=7#review 에 대한 설명으로 맞는 것은?",
    "options": [
      {
        "text": "443은 조회할 상품 번호다",
        "why": "443은 명시된 포트다. 상품 관련 쿼리는 id=7이다.",
        "correct": false
      },
      {
        "text": "#review까지 항상 서버에 그대로 전송한다",
        "why": "프래그먼트는 일반 HTTP 요청 대상에 포함되지 않는다. 별도 스크립트 전송이 없는 기본 동작을 묻는 문제다.",
        "correct": false
      },
      {
        "text": "경로는 /shop, 쿼리는 id=7이며 #review는 일반 HTTP 요청 대상에서 제외된다",
        "why": "경로와 쿼리는 서버가 처리할 자원을 지정한다. 프래그먼트는 브라우저가 문서 안의 위치 등을 처리하는 데 쓴다.",
        "correct": true
      },
      {
        "text": "호스트는 https이다",
        "why": "https는 스킴이다. 이 URL의 호스트는 example.com이다.",
        "correct": false
      }
    ],
    "steps": [
      ":// 앞은 스킴, 그 뒤의 example.com은 호스트다.",
      "포트 443 다음의 /shop과 ?id=7을 구분한다. # 뒤는 프래그먼트다."
    ],
    "model": "이 URL은 HTTPS로 example.com의 443번 포트에 접속하여 /shop 경로와 id=7 쿼리를 요청한다. review 프래그먼트는 브라우저가 사용하며 일반 요청 대상에는 포함하지 않는다.",
    "remember": "스킴 / 호스트 / 포트 / 경로 / 쿼리 / #위치",
    "evidence": "2장 교안: URL·HTTP, 기존 정리 5절",
    "level": "기초",
    "extra": false,
    "source": "notes.html"
  },
  {
    "id": 3,
    "title": "HTTP/1.1 메시지 구조",
    "concept": "HTTP/1.1의 요청은 메서드·요청 대상·버전으로 이루어진 시작 줄을 가진다. 헤더 뒤의 빈 줄은 본문과의 경계이며, 모든 메시지에 본문이 있는 것은 아니다.",
    "prompt": "GET /index.html HTTP/1.1 을 올바르게 읽은 것은?",
    "options": [
      {
        "text": "GET은 응답 상태 코드다",
        "why": "상태 코드는 200, 404 같은 숫자다. GET은 클라이언트가 요청하는 동작이다.",
        "correct": false
      },
      {
        "text": "/index.html은 서버 IP 주소다",
        "why": "/index.html은 자원의 경로다. 호스트 정보는 Host 헤더 등에서 식별한다.",
        "correct": false
      },
      {
        "text": "HTTP/2와 HTTP/3도 네트워크에서 반드시 같은 텍스트 시작 줄을 전송한다",
        "why": "HTTP/2와 HTTP/3는 이진 프레임 방식이다. HTTP/1.1의 텍스트 형식을 모든 버전에 일반화하면 안 된다.",
        "correct": false
      },
      {
        "text": "GET은 메서드, /index.html은 요청 대상, HTTP/1.1은 버전이다",
        "why": "요청 시작 줄의 세 요소를 순서대로 구분한 설명이다.",
        "correct": true
      }
    ],
    "steps": [
      "요청 줄은 메서드 → 요청 대상 → 버전으로 읽는다.",
      "응답 줄의 HTTP/1.1 200 OK와 비교하고, 헤더와 본문 사이의 빈 줄을 찾는다."
    ],
    "model": "HTTP/1.1 요청의 첫 줄은 수행할 동작, 대상 자원, 프로토콜 버전을 나타낸다. 헤더와 본문은 빈 줄로 구분하며 본문은 메시지에 따라 생략될 수 있다.",
    "remember": "GET은 요청 동작, 200은 응답 결과",
    "evidence": "2장 교안: HTTP 메시지, 기존 정리 5절",
    "level": "기초",
    "extra": false,
    "source": "notes.html"
  },
  {
    "id": 4,
    "title": "PUT과 PATCH",
    "concept": "HTTP 메서드는 요청의 의미를 나타낸다. GET은 조회, POST는 제출·처리, PUT은 대상 표현의 생성 또는 대체, PATCH는 부분 변경에 사용한다.",
    "prompt": "사용자 프로필의 전화번호 필드만 변경하려는 요청에 의미상 가장 잘 맞는 메서드는?",
    "options": [
      {
        "text": "PATCH",
        "why": "대상 표현의 일부를 변경하는 의미에 맞는다. 실제 API가 지원하는 메서드도 확인해야 한다.",
        "correct": true
      },
      {
        "text": "GET",
        "why": "GET은 조회를 위한 메서드다. 상태 변경을 의도하는 요청과 의미가 다르다.",
        "correct": false
      },
      {
        "text": "DELETE",
        "why": "DELETE는 대상 자원의 삭제 요청이다. 한 필드를 수정하는 목적과 다르다.",
        "correct": false
      },
      {
        "text": "PUT은 항상 부분 변경만을 뜻하므로 PUT",
        "why": "PUT은 기본적으로 대상 표현의 대체를 의미한다. 부분 변경 전용이라는 설명이 틀렸다.",
        "correct": false
      }
    ],
    "steps": [
      "조회인지, 제출인지, 전체 대체인지, 일부 변경인지 먼저 나눈다.",
      "일부 변경이라는 조건에서 PATCH를 선택한다. 서버의 실제 API 계약은 별도로 따른다."
    ],
    "model": "전화번호 일부 변경에는 PATCH가 의미상 적합하다. PUT은 대상 표현의 대체, GET은 조회, DELETE는 삭제를 요청한다.",
    "remember": "PUT 대체 / PATCH 일부 변경",
    "evidence": "2장 교안: HTTP 메서드, 기존 정리 5절",
    "level": "기초",
    "extra": false,
    "source": "notes.html"
  },
  {
    "id": 5,
    "title": "401·403·404 구분",
    "concept": "HTTP 상태 코드는 요청 결과를 알려준다. 401은 유효한 인증 정보 부족, 403은 요청 수행 거부, 404는 대상 자원을 찾지 못했거나 존재를 공개하지 않는 상황에 사용된다.",
    "prompt": "인증 필요 / 접근 거부 / 자원을 찾지 못함에 대응하는 대표 상태 코드 조합은?",
    "options": [
      {
        "text": "500 / 502 / 504",
        "why": "이들은 서버 내부 오류, 게이트웨이 오류, 게이트웨이 시간 초과 등 서버 측 문제를 나타낸다.",
        "correct": false
      },
      {
        "text": "401 / 403 / 404",
        "why": "인증 정보, 요청 허용 여부, 자원 식별 문제를 차례대로 구분했다.",
        "correct": true
      },
      {
        "text": "403 / 401 / 404",
        "why": "401과 403이 뒤바뀌었다. 401은 인증이 필요하다는 의미로 먼저 기억한다.",
        "correct": false
      },
      {
        "text": "200 / 301 / 304",
        "why": "200은 성공, 301은 영구 이동, 304는 조건부 요청에서 변경 없음이다.",
        "correct": false
      }
    ],
    "steps": [
      "4xx는 요청 측 문제 범주이며 5xx와 구분한다.",
      "401은 인증, 403은 거부, 404는 못 찾음으로 기억하되 서버가 정보를 숨기는 경우도 있음을 안다."
    ],
    "model": "401은 유효한 인증 정보가 부족한 경우, 403은 서버가 요청 수행을 거부한 경우, 404는 요청 자원을 찾지 못했거나 공개하지 않는 경우다. 상태 코드만으로 내부 원인을 하나로 확정하지는 않는다.",
    "remember": "401 인증 / 403 거부 / 404 없음",
    "evidence": "2장 교안: HTTP 상태 코드, 기존 정리 5절",
    "level": "기초",
    "extra": false,
    "source": "notes.html"
  },
  {
    "id": 6,
    "title": "HTTPS가 보장하는 것",
    "concept": "HTTPS는 TLS를 이용해 통신의 기밀성·무결성과 서버 인증을 제공한다. 암호화된 연결이라는 사실은 사이트의 사업자나 게시 내용이 믿을 만하다는 보증과 다르다.",
    "prompt": "HTTPS 사이트의 자물쇠 표시로 판단할 수 있는 내용은?",
    "options": [
      {
        "text": "접속자는 이미 사이트 회원으로 로그인했다",
        "why": "TLS의 서버 인증과 HTTP 애플리케이션의 사용자 로그인 인증은 별개다.",
        "correct": false
      },
      {
        "text": "HTTPS는 데이터 변조를 탐지하지 못한다",
        "why": "TLS는 기밀성뿐 아니라 무결성 보호도 제공한다. 변조를 탐지하고 연결을 거부할 수 있다.",
        "correct": false
      },
      {
        "text": "TLS 연결 보호를 사용하지만 판매자의 정직성까지 보증하지는 않는다",
        "why": "암호화와 인증서 검증은 통신 보호에 관한 것이다. 콘텐츠의 진실성이나 거래의 안전성은 별도 판단이다.",
        "correct": true
      },
      {
        "text": "이 사이트의 모든 정보는 사실이다",
        "why": "TLS는 내용의 사실 여부를 검증하지 않는다.",
        "correct": false
      }
    ],
    "steps": [
      "기밀성은 엿보기 방지, 무결성은 변조 검출, 인증은 통신 상대 확인이다.",
      "서버 인증과 회원 로그인, 콘텐츠 신뢰를 분리한다."
    ],
    "model": "HTTPS는 TLS를 통해 전송 중 데이터의 기밀성과 무결성을 보호하고 서버의 신원을 검증한다. 그러나 판매자의 정직성이나 콘텐츠의 안전성을 보증하는 것은 아니다.",
    "remember": "통신 보호와 내용 신뢰는 별개",
    "evidence": "쿠키캐시HTTPS 영상 16:34~17:56 · 2장 교안 HTTPS",
    "level": "기초",
    "extra": false,
    "source": "notes.html"
  },
  {
    "id": 7,
    "title": "SNI와 SAN",
    "concept": "SNI는 TLS 협상 시 클라이언트가 접속하려는 서버 이름을 알리는 확장이다. SAN은 인증서가 유효한 이름 등을 담는 필드이며 요청한 도메인과 맞는지 검증한다.",
    "prompt": "한 IP에서 여러 HTTPS 사이트를 운영한다. SNI와 SAN의 역할 구분은?",
    "options": [
      {
        "text": "SNI가 사용자의 로그인 비밀번호를 저장한다",
        "why": "SNI는 서버 이름을 전달하는 확장이다. 사용자 로그인 저장소가 아니다.",
        "correct": false
      },
      {
        "text": "SAN은 DNS 캐시의 만료 시간이다",
        "why": "DNS 캐시의 유효기간은 TTL이다. SAN은 인증서의 이름 정보다.",
        "correct": false
      },
      {
        "text": "유효기간만 맞으면 인증서의 도메인은 달라도 된다",
        "why": "서버 인증서 검증에는 이름 일치도 필요하다. 유효기간만으로 인증서 검증이 끝나지 않는다.",
        "correct": false
      },
      {
        "text": "SNI는 원하는 서버 이름 전달, SAN은 인증서의 유효한 이름 확인에 쓰인다",
        "why": "클라이언트가 요구하는 이름과 인증서가 증명하는 이름을 구분했다.",
        "correct": true
      }
    ],
    "steps": [
      "접속하려는 이름을 알리는 쪽은 SNI다.",
      "인증서의 SAN, 유효기간, 신뢰 체인 등을 확인한다."
    ],
    "model": "SNI는 클라이언트가 원하는 서버 이름을 TLS 연결 과정에서 전달한다. 인증서의 SAN에 해당 이름이 포함되는지 등을 확인해야 서버 인증이 성립한다.",
    "remember": "SNI 요청하는 이름 / SAN 증명하는 이름",
    "evidence": "쿠키캐시HTTPS 영상 21:57~24:52",
    "level": "응용",
    "extra": false,
    "source": "notes.html"
  },
  {
    "id": 8,
    "title": "쿠키·세션과 헤더 방향",
    "concept": "서버 세션 방식에서는 로그인 상태를 서버가 보관하고 세션 식별자를 쿠키로 전달할 수 있다. 서버 응답은 Set-Cookie, 이후 브라우저 요청은 Cookie 헤더를 사용한다.",
    "prompt": "로그인 후 세션 식별자를 주고받는 일반적인 순서는?",
    "options": [
      {
        "text": "서버가 Set-Cookie로 전달 → 브라우저가 저장 → 적용 대상 요청에 Cookie로 전송",
        "why": "쿠키를 설정하는 응답과 저장한 쿠키를 보내는 요청의 방향이 맞다.",
        "correct": true
      },
      {
        "text": "브라우저 응답의 Set-Cookie → 서버 요청의 Cookie",
        "why": "HTTP 클라이언트의 요청과 서버의 응답 방향을 거꾸로 설명했다.",
        "correct": false
      },
      {
        "text": "서버 세션 방식에서도 쿠키에 반드시 비밀번호 원문을 넣는다",
        "why": "세션 식별자로 서버의 상태를 찾을 수 있다. 비밀번호 원문을 쿠키에 넣어야 할 필요가 없다.",
        "correct": false
      },
      {
        "text": "쿠키와 서버 세션은 모두 브라우저에만 저장된다",
        "why": "쿠키 데이터는 클라이언트에, 서버 세션의 상태는 서버 측에 저장하는 방식이다.",
        "correct": false
      }
    ],
    "steps": [
      "서버가 응답에 Set-Cookie를 넣는다.",
      "브라우저는 도메인·경로·보안 속성 등 적용 조건에 맞는 요청에 Cookie를 붙인다.",
      "서버는 세션 식별자를 이용해 저장한 로그인 상태를 찾는다."
    ],
    "model": "HTTP가 요청 간 로그인 상태를 자동으로 유지하는 것은 아니다. 서버는 세션 식별자를 Set-Cookie로 전달하고, 브라우저가 이후 Cookie로 돌려주면 서버가 저장된 세션 상태와 연결한다.",
    "remember": "Set-Cookie 내려옴 / Cookie 올라감",
    "evidence": "쿠키캐시HTTPS 영상 01:24~06:02",
    "level": "기초",
    "extra": false,
    "source": "notes.html"
  },
  {
    "id": 9,
    "title": "ETag와 304 캐시 재검증",
    "concept": "ETag는 응답 표현의 버전을 식별하는 검증자다. 클라이언트가 If-None-Match에 이전 ETag를 보내는 조건부 GET에서 내용이 같으면 304를 받고 저장한 본문을 재사용할 수 있다.",
    "prompt": "캐시에 본문과 ETag=\"v1\"이 있다. 재검증 후 서버가 304를 보냈다면?",
    "options": [
      {
        "text": "If-None-Match는 로그인 암호를 보내는 헤더다",
        "why": "이 헤더는 기존 ETag를 조건으로 제시한다. 사용자 비밀번호를 보내는 용도가 아니다.",
        "correct": false
      },
      {
        "text": "기존 캐시 본문을 재사용하며 새 본문을 다시 내려받지 않는다",
        "why": "조건부 GET의 304는 변경 없음이다. 캐시가 이미 가진 표현을 재사용한다.",
        "correct": true
      },
      {
        "text": "304는 페이지가 삭제됐다는 뜻이다",
        "why": "찾지 못한 자원은 일반적으로 404와 관련된다. 304는 캐시 재검증 결과다.",
        "correct": false
      },
      {
        "text": "서버는 304 응답에 반드시 전체 파일을 담는다",
        "why": "304 응답은 새 표현의 본문을 보내지 않는다. 전송량을 줄이는 이유다.",
        "correct": false
      }
    ],
    "steps": [
      "첫 응답의 본문과 ETag를 저장한다.",
      "조건부 GET에 If-None-Match로 ETag를 보낸다.",
      "같으면 304와 기존 본문, 바뀌면 새 본문을 가진 200을 처리한다."
    ],
    "model": "If-None-Match를 사용한 조건부 GET에서 ETag가 일치하면 서버는 304로 변경 없음을 알린다. 클라이언트는 기존 캐시 본문을 재사용하여 중복 전송을 줄인다.",
    "remember": "ETag → If-None-Match → 같으면 304",
    "evidence": "쿠키캐시HTTPS 영상 12:42~14:29 · 2장 교안 캐시",
    "level": "응용",
    "extra": false,
    "source": "notes.html"
  },
  {
    "id": 10,
    "title": "쿠키와 캐시·CDN의 차이",
    "concept": "쿠키는 상태 관련 데이터를 요청 사이에 전달하는 데 쓰이고 캐시는 이미 받은 자원을 재사용한다. CDN은 여러 지역에 자원을 배치해 사용자 가까운 곳에서 응답할 수 있게 한다.",
    "prompt": "로그인 상태 전달 / 동일 이미지 재사용 / 가까운 서버에서 이미지 제공의 대응은?",
    "options": [
      {
        "text": "CDN / MAC / TCP ACK",
        "why": "CDN이 로그인 상태 유지 자체를 뜻하지 않는다. MAC과 ACK는 이미지 재사용 기능이 아니다.",
        "correct": false
      },
      {
        "text": "세 가지 모두 반드시 서버의 원본 파일을 삭제하는 기능이다",
        "why": "쿠키·캐시·CDN은 원본 파일 삭제를 목적으로 하지 않는다.",
        "correct": false
      },
      {
        "text": "쿠키 / 캐시 / CDN",
        "why": "사용자 상태, 자원 재사용, 분산 제공이라는 목적을 정확히 나눴다.",
        "correct": true
      },
      {
        "text": "캐시 / 쿠키 / DNS",
        "why": "캐시와 쿠키가 뒤바뀌었고 DNS는 이름 정보를 제공하는 시스템이다.",
        "correct": false
      }
    ],
    "steps": [
      "누가 접속했는지 이어 주는 정보와 같은 파일의 중복 전송 감소를 구분한다.",
      "CDN은 사용자와 제공 서버 사이의 거리·트래픽을 줄일 수 있지만 언제나 빨라지는 보장은 아니다."
    ],
    "model": "쿠키는 세션 식별자 등 상태 정보를 전달할 수 있고, 캐시는 저장된 자원을 재사용한다. CDN은 사용자 가까운 서버에서 콘텐츠를 제공하여 원본 서버까지의 지연과 부하를 줄인다.",
    "remember": "상태는 쿠키 / 재사용은 캐시 / 가까이는 CDN",
    "evidence": "쿠키캐시HTTPS 영상 01:24~06:02, 08:25~12:31",
    "level": "기초",
    "extra": false,
    "source": "notes.html"
  },
  {
    "id": 11,
    "title": "HTTP 버전과 전송 기반",
    "concept": "HTTP/1.1과 HTTP/2는 TCP를 기반으로 한다. HTTP/3은 UDP 위에서 동작하는 QUIC을 사용하며 QUIC이 신뢰적인 스트림과 연결 관리를 제공한다.",
    "prompt": "HTTP/2와 HTTP/3에 대한 올바른 연결은?",
    "options": [
      {
        "text": "HTTP/2는 UDP, HTTP/3은 TCP다",
        "why": "전송 기반을 뒤바꿨다. HTTP/3의 핵심은 QUIC이다.",
        "correct": false
      },
      {
        "text": "HTTP/3은 UDP를 쓰므로 손실 복구 기능이 전혀 없다",
        "why": "UDP 자체의 기능과 그 위의 QUIC 기능은 다르다. QUIC은 손실 복구를 수행한다.",
        "correct": false
      },
      {
        "text": "HTTP/2는 TCP 연결에서 요청을 다중화할 수 없다",
        "why": "HTTP/2는 하나의 연결에서 여러 스트림을 다중화한다.",
        "correct": false
      },
      {
        "text": "HTTP/2는 TCP, HTTP/3은 QUIC/UDP 기반이다",
        "why": "HTTP/2의 스트림 다중화와 HTTP/3의 전송 기반 변경을 구분했다.",
        "correct": true
      }
    ],
    "steps": [
      "1.1과 2는 TCP, 3은 QUIC이라고 먼저 적는다.",
      "QUIC이 UDP 위에서 구현한 기능을 UDP 기본 기능과 분리한다."
    ],
    "model": "HTTP/2는 TCP 연결에서 이진 프레임과 스트림 다중화를 사용한다. HTTP/3은 QUIC을 이용하며 QUIC은 UDP 위에서 신뢰적인 스트림, 손실 복구와 보안을 구현한다.",
    "remember": "1.1·2는 TCP / 3은 QUIC·UDP",
    "evidence": "2장 교안 HTTP 버전 · 3장 교안 QUIC",
    "level": "기초",
    "extra": false,
    "source": "notes.html"
  },
  {
    "id": 12,
    "title": "DNS 레코드 종류",
    "concept": "DNS는 이름에 관한 여러 종류의 정보를 저장한다. A는 IPv4, AAAA는 IPv6, CNAME은 별칭, MX는 메일 수신 서버, NS는 권한 네임서버 정보를 가리킨다.",
    "prompt": "IPv6 주소 / 별칭 / 메일 수신 서버를 찾을 때 대응하는 레코드는?",
    "options": [
      {
        "text": "AAAA / CNAME / MX",
        "why": "각 레코드가 담는 정보의 종류에 맞게 대응했다.",
        "correct": true
      },
      {
        "text": "A / MX / CNAME",
        "why": "A는 IPv4이고 MX와 CNAME의 의미도 뒤바뀌었다.",
        "correct": false
      },
      {
        "text": "NS / AAAA / A",
        "why": "NS는 권한 서버, AAAA는 IPv6 주소, A는 IPv4 주소다.",
        "correct": false
      },
      {
        "text": "TTL / TCP / HTTP",
        "why": "TTL은 캐시 유효기간이며 TCP와 HTTP는 프로토콜이다. 이 조합은 DNS 레코드 종류가 아니다.",
        "correct": false
      }
    ],
    "steps": [
      "A와 AAAA는 주소 형식의 차이다.",
      "CNAME은 이름→다른 이름, MX는 메일, NS는 권한 서버로 구분한다."
    ],
    "model": "AAAA는 IPv6 주소를, CNAME은 다른 이름으로의 별칭을, MX는 메일 수신 서버를 나타낸다. DNS의 역할은 단순한 IPv4 주소 조회에만 한정되지 않는다.",
    "remember": "A v4 / AAAA v6 / CNAME 별칭 / MX 메일",
    "evidence": "2장 교안 DNS · 기존 정리 7절",
    "level": "기초",
    "extra": false,
    "source": "notes.html"
  },
  {
    "id": 13,
    "title": "DNS 해석과 캐시",
    "concept": "재귀 리졸버는 클라이언트 대신 DNS 답을 찾아 준다. 캐시가 없으면 루트·TLD·권한 서버의 안내를 따라갈 수 있고, 유효한 캐시가 있으면 일부 단계를 생략한다.",
    "prompt": "DNS 이름 해석 과정을 가장 정확히 설명한 것은?",
    "options": [
      {
        "text": "권한 DNS 서버와 기본 게이트웨이는 반드시 같은 장비다",
        "why": "권한 DNS는 이름 정보의 권한 있는 답을 제공하고 기본 게이트웨이는 다른 망으로 패킷을 전달한다.",
        "correct": false
      },
      {
        "text": "재귀 리졸버가 캐시를 확인하고 필요하면 루트·TLD·권한 DNS를 따라 답을 찾는다",
        "why": "리졸버의 역할과 캐시로 질의를 줄이는 동작을 함께 설명했다.",
        "correct": true
      },
      {
        "text": "모든 브라우저는 매번 모든 DNS 서버를 직접 방문한다",
        "why": "일반적으로 설정된 리졸버를 사용하며 유효한 캐시가 있으면 상위 서버 질의를 생략할 수 있다.",
        "correct": false
      },
      {
        "text": "루트 서버는 모든 도메인의 최종 웹 서버 IP만 저장한다",
        "why": "루트는 주로 TLD 서버를 안내한다. 모든 최종 호스트 주소를 직접 알려주는 서버가 아니다.",
        "correct": false
      }
    ],
    "steps": [
      "클라이언트와 재귀 리졸버를 먼저 나눈다.",
      "캐시가 없을 때 루트 → TLD → 권한 서버 안내를 따라간다.",
      "응답을 캐시하면 이후 조회의 시간과 질의 수를 줄인다."
    ],
    "model": "클라이언트는 재귀 리졸버에 이름 해석을 요청한다. 리졸버는 캐시를 확인하고 필요하면 DNS 계층의 안내를 따라 권한 서버에서 답을 얻어 돌려준다.",
    "remember": "리졸버가 대신 찾고, 캐시가 있으면 줄여서 찾음",
    "evidence": "2장 교안 DNS · 기존 정리 7절",
    "level": "응용",
    "extra": false,
    "source": "notes.html"
  },
  {
    "id": 14,
    "title": "DNS TTL과 변경 지연",
    "concept": "DNS TTL은 레코드를 캐시할 수 있는 시간을 나타낸다. IP 패킷의 TTL은 라우팅 루프를 제한하는 홉 수 관련 값으로, DNS TTL과 목적이 다르다.",
    "prompt": "서버 IP를 바꿨는데 일부 사용자만 예전 IP로 접속한다. 가장 적절한 설명은?",
    "options": [
      {
        "text": "내 PC 캐시를 비우면 세계의 DNS 캐시가 모두 삭제된다",
        "why": "로컬 캐시 삭제는 다른 리졸버와 사용자의 캐시를 지우지 않는다.",
        "correct": false
      },
      {
        "text": "DNS TTL과 IP TTL은 모두 같은 패킷의 홉 수다",
        "why": "DNS TTL은 캐시 시간, IP TTL은 패킷 전달 횟수 제한과 관련되어 다르다.",
        "correct": false
      },
      {
        "text": "기존 DNS 캐시의 남은 TTL 때문에 사용자별 결과가 다를 수 있다",
        "why": "리졸버와 기기가 이전 응답을 각자 캐시할 수 있어 변경이 동시에 보이지 않을 수 있다.",
        "correct": true
      },
      {
        "text": "DNS TTL은 브라우저의 글자 크기다",
        "why": "TTL은 캐시 유효기간에 관한 값이며 화면 표시 설정과 관계없다.",
        "correct": false
      }
    ],
    "steps": [
      "권한 서버의 새 응답과 사용자 측 캐시를 구분한다.",
      "리졸버별 캐시와 남은 TTL을 비교한다. 주소 변경 직후 결과가 다르다고 즉시 장애로 확정하지 않는다."
    ],
    "model": "DNS 정보를 변경해도 기존 응답을 가진 캐시는 남은 TTL 동안 이전 주소를 사용할 수 있다. 따라서 사용자나 리졸버에 따라 변경 반영 시점이 다를 수 있다.",
    "remember": "DNS TTL은 캐시 시간, IP TTL은 홉 제한",
    "evidence": "2장 교안 DNS·트러블슈팅 · 기존 정리 7절",
    "level": "응용",
    "extra": false,
    "source": "notes.html"
  },
  {
    "id": 15,
    "title": "DNS는 UDP만 쓰는가",
    "concept": "전통적 DNS는 UDP 53과 TCP 53을 모두 사용한다. 일반적인 작은 질의·응답은 UDP가 흔하지만 응답이 잘리는 경우 TCP 재시도 등이 필요할 수 있다.",
    "prompt": "DNS에 대한 설명으로 맞는 것은?",
    "options": [
      {
        "text": "DNS는 TCP를 전혀 사용할 수 없다",
        "why": "TCP 53 역시 DNS의 표준적인 전송 방식이다.",
        "correct": false
      },
      {
        "text": "DNS가 이름을 해석했으면 HTTPS 로그인 성공까지 보장된다",
        "why": "이름 해석 다음에도 연결, TLS, HTTP, 로그인 단계가 남아 있다.",
        "correct": false
      },
      {
        "text": "DNS는 웹 문서의 본문을 암호화하는 프로토콜이다",
        "why": "DNS는 이름 정보 조회다. HTTPS 통신 보호는 TLS 등에서 수행한다.",
        "correct": false
      },
      {
        "text": "UDP 53뿐 아니라 TCP 53도 사용한다",
        "why": "DNS를 UDP만의 서비스로 제한하면 TCP 재시도와 여러 운영 상황을 설명하지 못한다.",
        "correct": true
      }
    ],
    "steps": [
      "DNS가 해결하는 것은 이름 정보라는 점을 먼저 적는다.",
      "전송 방식은 UDP와 TCP가 모두 가능하다고 구분한다. 암호화 DNS는 별도 확장이다."
    ],
    "model": "DNS는 일반적으로 UDP 53으로 질의하지만 TCP 53도 사용한다. 이름 해석의 성공은 웹 서버 연결이나 TLS·로그인 성공을 보장하지 않는다.",
    "remember": "DNS 53은 UDP도 TCP도",
    "evidence": "2장 교안 DNS · 기존 정리 7절",
    "level": "기초",
    "extra": false,
    "source": "notes.html"
  },
  {
    "id": 16,
    "title": "SMTP·POP3·IMAP",
    "concept": "SMTP는 메일 제출과 서버 간 전달에 쓰인다. POP3와 IMAP은 수신자가 메일을 읽는 데 사용하며 IMAP은 서버 메일함 상태를 여러 기기와 동기화하기에 적합하다.",
    "prompt": "메일 보내기 / 여러 기기에서 읽음 상태 동기화의 대표 프로토콜 조합은?",
    "options": [
      {
        "text": "SMTP / IMAP",
        "why": "전달과 메일함 동기화라는 역할을 각각 구분했다.",
        "correct": true
      },
      {
        "text": "IMAP / SMTP",
        "why": "IMAP은 메일함 조회·동기화이고 SMTP는 전달이므로 역할이 바뀌었다.",
        "correct": false
      },
      {
        "text": "DNS / FTP",
        "why": "DNS는 이름 정보, FTP는 파일 전송이다. 이메일 제출·메일함 동기화에 대한 답이 아니다.",
        "correct": false
      },
      {
        "text": "POP3 / POP3, 그리고 POP3는 언제나 서버 원본을 지운다",
        "why": "POP3는 메일 제출 프로토콜이 아니며 서버 원본 유지 여부는 설정과 동작에 따라 달라질 수 있다.",
        "correct": false
      }
    ],
    "steps": [
      "발신자 → 제출 서버 → 수신 서버 전달은 SMTP로 연결한다.",
      "수신자의 메일함 접근은 POP3 또는 IMAP이고 여러 기기 상태 동기화에는 IMAP이 잘 맞는다."
    ],
    "model": "SMTP는 발신자의 메일 제출과 서버 간 전달을 담당한다. IMAP은 서버 메일함의 메시지와 상태를 여러 기기에서 조회·동기화하는 데 사용한다.",
    "remember": "SMTP 보냄 / IMAP 동기화 / POP3 내려받아 읽기",
    "evidence": "2장 교안 이메일 · 기존 정리 7절",
    "level": "기초",
    "extra": false,
    "source": "notes.html"
  },
  {
    "id": 17,
    "title": "포트와 FTP 연결",
    "concept": "대표 포트를 외울 때 제어 연결과 데이터 연결을 구분한다. FTP는 제어에 TCP 21을 사용하며 능동·수동 모드에서 데이터 연결 방식과 포트가 달라진다.",
    "prompt": "포트 번호에 관한 설명으로 맞는 것은?",
    "options": [
      {
        "text": "SFTP는 FTP 수동 모드의 다른 이름이다",
        "why": "SFTP는 SSH 기반 파일 전송 프로토콜로 FTP와 별개다.",
        "correct": false
      },
      {
        "text": "FTP 제어는 21이며 수동 모드 데이터는 서버가 안내한 별도 포트로 연결한다",
        "why": "FTP는 제어와 데이터를 분리한다. 데이터가 모든 모드에서 20만 사용한다는 설명은 부정확하다.",
        "correct": true
      },
      {
        "text": "SMTP 서버 간 전달은 기본적으로 143이다",
        "why": "143은 IMAP의 대표 포트다. SMTP 서버 간 전달은 25, 사용자 제출은 보통 587이다.",
        "correct": false
      },
      {
        "text": "IMAP은 110, POP3는 143이다",
        "why": "반대다. POP3 110, IMAP 143으로 기억한다.",
        "correct": false
      }
    ],
    "steps": [
      "웹 80/443, DNS 53, SMTP 25/587, POP3 110, IMAP 143을 구분한다.",
      "FTP는 제어 21과 데이터 연결을 분리한다. 능동 데이터 20을 모든 경우에 일반화하지 않는다."
    ],
    "model": "FTP는 제어 연결과 데이터 연결을 별도로 사용한다. 제어는 TCP 21이며 수동 모드에서는 클라이언트가 서버에서 안내받은 별도 데이터 포트로 연결한다.",
    "remember": "FTP 제어 21 / 데이터는 모드 확인",
    "evidence": "2장 교안 기타 네트워크 애플리케이션 · 기존 정리 7절",
    "level": "응용",
    "extra": false,
    "source": "notes.html"
  },
  {
    "id": 18,
    "title": "적응형 스트리밍과 장애 범위",
    "concept": "ABR은 네트워크 처리량과 재생 버퍼 등을 보고 다음 영상 조각의 비트레이트를 선택한다. 끊김과 화질 사이의 균형을 조절하며 회선 자체의 물리적 용량을 바꾸는 기능은 아니다.",
    "prompt": "같은 영상을 보는 중 연결이 나빠지자 화질이 낮아지고 재생은 유지됐다. 가능한 설명은?",
    "options": [
      {
        "text": "UDP는 항상 무손실이므로 어떤 네트워크에서도 화질은 변하면 안 된다",
        "why": "UDP 자체는 도착을 보장하지 않으며 스트리밍 화질은 네트워크·버퍼 상태에 따라 달라질 수 있다.",
        "correct": false
      },
      {
        "text": "화질이 낮아졌으므로 DNS 서버가 반드시 고장 났다",
        "why": "화질 변화만으로 이름 해석 장애를 확정할 근거는 없다. 처리량과 버퍼 상태부터 볼 수 있다.",
        "correct": false
      },
      {
        "text": "ABR이 다음 조각의 비트레이트를 낮춰 버퍼 고갈을 줄였다",
        "why": "받는 속도에 비해 필요한 데이터량을 줄여 끊김을 완화하는 동작이다.",
        "correct": true
      },
      {
        "text": "ABR이 인터넷 회선 속도를 무제한으로 늘렸다",
        "why": "ABR은 전송할 콘텐츠의 비트레이트를 조절하지 회선의 물리적 용량을 늘리지는 않는다.",
        "correct": false
      }
    ],
    "steps": [
      "영상이 요구하는 비트레이트와 실제 다운로드 처리량을 비교한다.",
      "처리량이 떨어지면 다음 조각의 품질을 낮춰 버퍼가 바닥나는 것을 줄일 수 있다."
    ],
    "model": "적응형 비트레이트 스트리밍은 네트워크와 버퍼 상태를 관찰하여 다음 영상 조각의 품질을 조절한다. 이는 데이터 요구량을 줄이는 방식이며 회선 용량 자체를 증가시키지는 않는다.",
    "remember": "ABR은 다음 조각의 화질을 조절",
    "evidence": "2장 교안 기타 네트워크 애플리케이션 · 기존 정리 7절",
    "level": "응용",
    "extra": false,
    "source": "notes.html"
  }
];

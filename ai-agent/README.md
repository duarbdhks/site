# AI Agent Engineering 학습 로드맵

[`bojieli/ai-agent-book`](https://github.com/bojieli/ai-agent-book)의 핵심 개념과 실습을 분석해 Node.js·TypeScript 백엔드 개발자 관점으로 재구성한 8세션 정적 학습 사이트입니다.

## 구성

| 세션 | 파일 | 핵심 |
|---|---|---|
| 1 | `01-agent-harness.html` | Agent 경계, Harness, 상태 머신 |
| 2 | `02-context-engineering.html` | 컨텍스트 계층, 압축, 신뢰 경계 |
| 3 | `03-tools-mcp-security.html` | 도구 ACI, MCP, 권한, 샌드박스 |
| 4 | `04-memory-rag.html` | 기억 분류, 혼합 검색, 외부화 학습 |
| 5 | `05-coding-agent.html` | 검색·편집·테스트 기반 Coding Agent |
| 6 | `06-evals-observability.html` | 평가 세트, 채점기, Trace, CI |
| 7 | `07-production-architecture.html` | 비동기 Run, 멱등성, 복구, SLO |
| 8 | `08-multi-agent-career.html` | 멀티 Agent, A2A, 90일 커리어 계획 |

각 세션은 약 20분이며, `GitHub 이슈 → 계획 승인 → 코드 수정 → 테스트 검증 → Draft PR` 캡스톤으로 연결됩니다.

## 로컬 실행

빌드 과정이나 외부 패키지가 필요하지 않습니다.

```bash
python3 -m http.server 8080
```

브라우저에서 `http://localhost:8080/ai-agent/`를 엽니다.

## 기술 구성

- 독립형 HTML 9개
- 공유 `styles.css`
- 공유 `app.js`
- `localStorage` 기반 학습 진행률
- 코드 복사와 읽기 진행률
- 모바일 반응형
- 외부 JavaScript·CSS 의존성 없음

## 기준 자료와 라이선스

주요 기준 자료인 [`bojieli/ai-agent-book`](https://github.com/bojieli/ai-agent-book)은 Apache License 2.0으로 공개되어 있습니다. 이 디렉토리의 내용은 원문 번역본이 아니라 핵심 아이디어를 분석·요약하고 실무 학습 흐름으로 재구성한 독립 콘텐츠입니다. 각 페이지 하단에 원문과 공식 확장 자료 링크를 표시했습니다.

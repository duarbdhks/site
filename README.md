# 학습 컨텐츠 모음

루트 `index.html`은 전체 강좌를 나열하는 허브 페이지입니다. 각 강좌는 `<주제>/<회차>/` 디렉토리 아래 독립 실행형 HTML로 구성됩니다.

## 디렉토리 구조

```
index.html                  # 허브 페이지 (강좌 목록, 정적 링크)
clickhouse/
  learning1/
    index.html               # 회차 목차 (주차별 링크)
    week1-mergetree.html
    week2-cdc-consistency.html
    week3-materialized-view-aggregation.html
    week4-query-optimization.html
    week5-observability-runbook.html
    week6-ingestion-cost-retention.html
```

## 신규 강좌 추가 방법

1. `<subject-slug>/<learningN>/` 디렉토리 생성 (예: `clickhouse/learning2/`, `kafka/learning1/`)
2. 그 안에 독립 실행형 `index.html`(회차 목차) + 컨텐츠 html 배치
3. 루트 `index.html`의 `.grid` 안에 `.tile` 카드 1개 복사해 제목/설명/경로만 교체

## ClickHouse · 1회차 구성 원칙

- 과제형이 아닌 강의형 설명
- 코드보다 예시, 사례, 쉬운 비유 중심
- CDC → Kafka → Flink → ClickHouse → API 통계 파이프라인 맥락 반영
- 각 주차 10분 이상 학습을 목표로 본문 분량 확대
</content>

# PROGRESS

- M0-1 应用骨架：完成。React+Vite+TS 单页骨架，`store/uiStore.ts`（Zustand，`currentView` + `viewState{camera,mode}` + 三辐条抽屉开关），5 个独立屏占位（home/①/⑤/⑥/⑬）+ 活画布 4 个相机档占位 + ⑦三辐条抽屉。验收闸通过：独立屏切换、相机档切换、抽屉开关均正确变更 view-state；浏览器自动化验证 URL 全程不变（`urlsSeenCount: 1`）；`package.json`/`package-lock.json` 无任何路由库；刷新后回落默认视图（M0-1 未接持久化，符合预期）；`npm run build`/`npm run lint` 均过。

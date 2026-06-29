# 叙引 · CLAUDE.md

> 新窗口/CC 读序：本文件 → `docs/canon/叙引_现行真相源索引_v2_24.md`（全项目唯一 canon 指针，不在其"现行真相源"列里的文档=非现行，不得据以开发）→ 按索引指向的 spec 去读。

## 当前里程碑

按 `docs/canon/叙引_决策登记卡_开发规划总装_v1_1.md`：M0 地基 → M1a 引擎内核(证"对") ⊂ M1b 用户主链(证"好用") → M2+（post-M1 闸）。

M0 三个任务见 `docs/canon/叙引_里程碑0_地基三件套_CC开发任务包_v1_1.md`，节奏：**一个任务 → 验收闸过关 → git commit + PROGRESS.md 记一行 → 下一个**，不要跳过验收闸连续做多个任务。

- [x] M0-1 应用骨架
- [ ] M0-2 持久化层（仓储接口 + Dexie 实现）
- [ ] M0-3 创作资产注册表（schema 驱动）

## 工程铁律（已确认 1-3，完整 1-6 见待补的《CLAUDE v3 重接版》canon 文档）

1. 业务/UI 永不直接 import Dexie、永不碰 localStorage——只调仓储接口。
2. 加模块 = 注册一条配置，不为模块建专属表、不加路由。
3. 单页 + `currentView` 切换，禁止引入任何路由库。
4. 〔待补〕
5. 〔待补〕
6. 〔待补〕

## 技术栈

React + Vite + TypeScript，状态用 Zustand 集中 store（`src/store/uiStore.ts`）。

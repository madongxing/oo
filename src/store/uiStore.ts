import { create } from 'zustand';

/**
 * 顶层屏标识。
 * 'home' = hub②活世界仪表盘(外壳) + 活画布(③②④⑧统一相机档)。
 * 其余四个为独立屏：①创意评估 / ⑤写作台 / ⑥审校台 / ⑬作品蓝本。
 * 三辐条⑦与相机档正交，见 threeSpokesDrawerOpen，不在此枚举内。
 */
export type TopLevelView =
  | 'home'
  | 'creativeEvaluation'
  | 'writingDesk'
  | 'reviewDesk'
  | 'bookProfile';

/** 活画布相机档：远=⑧全局掌控台星图 / 中=③世界生长沙盘+②欲望场 / 钻入=④推演台场景。 */
export type CameraPosition = 'far' | 'mid' | 'diveIn';

/** 同一相机档下的子屏消歧（如 mid 档下区分③世界沙盘与②欲望场）。 */
export type CameraMode = 'controlTower' | 'worldSandbox' | 'desireField' | 'deductionScene';

export interface ViewState {
  camera: CameraPosition;
  mode: CameraMode;
}

interface UIStore {
  currentView: TopLevelView;
  viewState: ViewState;
  threeSpokesDrawerOpen: boolean;
  setView: (view: TopLevelView) => void;
  setCamera: (camera: CameraPosition, mode: CameraMode) => void;
  toggleThreeSpokesDrawer: (open?: boolean) => void;
}

const DEFAULT_VIEW_STATE: ViewState = { camera: 'far', mode: 'controlTower' };

export const useUIStore = create<UIStore>((set) => ({
  currentView: 'home',
  viewState: DEFAULT_VIEW_STATE,
  threeSpokesDrawerOpen: false,
  setView: (view) => set({ currentView: view }),
  setCamera: (camera, mode) => set({ viewState: { camera, mode } }),
  toggleThreeSpokesDrawer: (open) =>
    set((s) => ({ threeSpokesDrawerOpen: open ?? !s.threeSpokesDrawerOpen })),
}));

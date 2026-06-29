import { useUIStore } from '../store/uiStore';

const CAMERA_LABEL: Record<string, string> = {
  far: '远 · ⑧全局掌控台星图',
  mid: '中 · ③世界生长沙盘 / ②欲望场',
  diveIn: '钻入 · ④推演台场景',
};

/** hub②活世界仪表盘(外壳) + 活画布(③②④⑧统一相机档)。占位：渲染本体留后续里程碑。 */
export function HomeView() {
  const { viewState } = useUIStore();
  return (
    <section data-view="home">
      <h1>家 · 活世界仪表盘(hub)</h1>
      <p>当前相机档：{CAMERA_LABEL[viewState.camera]}（mode: {viewState.mode}）</p>
      <p style={{ opacity: 0.6 }}>活画布渲染本体留后续里程碑，此处仅占位。</p>
    </section>
  );
}

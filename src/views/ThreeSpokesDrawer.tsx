import { useUIStore } from '../store/uiStore';

/** 屏⑦ 三辐条(资产 family)。与相机档正交的抽屉，占位。 */
export function ThreeSpokesDrawer() {
  const { threeSpokesDrawerOpen, toggleThreeSpokesDrawer } = useUIStore();
  if (!threeSpokesDrawerOpen) return null;
  return (
    <aside data-view="threeSpokes">
      <h2>⑦ 三辐条</h2>
      <button onClick={() => toggleThreeSpokesDrawer(false)}>关闭</button>
    </aside>
  );
}

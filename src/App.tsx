import type { CameraMode, CameraPosition, TopLevelView } from './store/uiStore';
import { useUIStore } from './store/uiStore';
import { HomeView } from './views/HomeView';
import { CreativeEvaluationView } from './views/CreativeEvaluationView';
import { WritingDeskView } from './views/WritingDeskView';
import { ReviewDeskView } from './views/ReviewDeskView';
import { BookProfileView } from './views/BookProfileView';
import { ThreeSpokesDrawer } from './views/ThreeSpokesDrawer';

const INDEPENDENT_VIEWS: { view: TopLevelView; label: string }[] = [
  { view: 'home', label: '家(hub)' },
  { view: 'creativeEvaluation', label: '①创意评估' },
  { view: 'writingDesk', label: '⑤写作台' },
  { view: 'reviewDesk', label: '⑥审校台' },
  { view: 'bookProfile', label: '⑬作品蓝本' },
];

const CAMERA_STOPS: { camera: CameraPosition; mode: CameraMode; label: string }[] = [
  { camera: 'far', mode: 'controlTower', label: '远·⑧星图' },
  { camera: 'mid', mode: 'worldSandbox', label: '中·③世界沙盘' },
  { camera: 'mid', mode: 'desireField', label: '中·②欲望场' },
  { camera: 'diveIn', mode: 'deductionScene', label: '钻入·④推演场景' },
];

function renderView(view: TopLevelView) {
  switch (view) {
    case 'home':
      return <HomeView />;
    case 'creativeEvaluation':
      return <CreativeEvaluationView />;
    case 'writingDesk':
      return <WritingDeskView />;
    case 'reviewDesk':
      return <ReviewDeskView />;
    case 'bookProfile':
      return <BookProfileView />;
  }
}

function App() {
  const { currentView, viewState, setView, setCamera, toggleThreeSpokesDrawer } = useUIStore();

  return (
    <div>
      <nav>
        {INDEPENDENT_VIEWS.map(({ view, label }) => (
          <button
            key={view}
            disabled={currentView === view}
            onClick={() => setView(view)}
          >
            {label}
          </button>
        ))}
        <button onClick={() => toggleThreeSpokesDrawer()}>⑦三辐条</button>
      </nav>

      {currentView === 'home' && (
        <nav aria-label="camera">
          {CAMERA_STOPS.map(({ camera, mode, label }) => (
            <button
              key={`${camera}-${mode}`}
              disabled={viewState.camera === camera && viewState.mode === mode}
              onClick={() => setCamera(camera, mode)}
            >
              {label}
            </button>
          ))}
        </nav>
      )}

      <main>{renderView(currentView)}</main>

      <ThreeSpokesDrawer />
    </div>
  );
}

export default App;

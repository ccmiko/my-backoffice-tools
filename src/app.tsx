import { createRoot } from 'react-dom/client';
import { Layout } from './base/layout';

const root = createRoot(document.getElementById('app')!);
root.render(<Layout/>);

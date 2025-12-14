import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout'
import {
  Home,
  Work,
  WorkDetail,
  About,
  Insights,
  Consulting,
  Contact,
  ArticleDetail,
} from '@/components/pages'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<WorkDetail />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<ArticleDetail />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App

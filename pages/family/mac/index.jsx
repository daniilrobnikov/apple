import CompareGrid from '@/components/templates/family/layout/compare/CompareGrid'
import RouterGrid from '@/components/templates/family/layout/grid/RouterGrid'
import ChapterNav from '@/components/templates/layout/nav/ChapterNav'

export default function Mac() {
  return (
    <>
      <ChapterNav />
      <main>
        <RouterGrid />
        <CompareGrid />
      </main>
    </>
  )
}

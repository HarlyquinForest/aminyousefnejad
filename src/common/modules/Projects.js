import NextLink from 'next/link'
import { BsFolder } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'
import Masonry from 'react-masonry-css'
const Projects = () => {
  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    978: 2,
    500: 1
  }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      <Project
        title="Todo-CLI"
        desc="یک ابزار بسیار ساده که امکان نوشتن یاداشت در محیط کامند لاین رو فراهم می کنه. اگه سرور ادمین باشید و در بخاطر سپاردن کارایی که باید انجام بدید  دچار مشکل هستید این ابزار می تونه بخشی از مشکلتونو حل کنه. ولی بخشی کا باید یادتون بمونه تا از این ابزار استفاده کنید به خودتون بستگی داره. "
        link="https://github.com/HarlyquinForest/todo-cli"
        tags={['python', 'bash']}
      />
      <Project
        title="Admin page Dashboard"
        desc="یک نمونه از پیاده سازی داشبورد مدیریت سایت با استفاده از کامپوننت های syncfusion و فریمورک tailwindcss"
        link="https://github.com/HarlyquinForest/react-dashboard"
        tags={['react.js', 'tailwindcss', 'syncfusion']}
      />
      <Project
        title="8Puzzle solver"
        desc="الگوریتم های هوش مصنوعی برای حل یه پازل بسیار ساده که توسط جاوا پیاده سازی شده .الگوریتم هایی که در این برنامه برای حل کردن پازل ازشون استفاده کردم عبارت اند از : BFS, A*, RBFS"
        link="https://github.com/HarlyquinForest/8Puzzle"
        tags={['java', 'Artificaial Intelligence']}
      />
      <Project
        title="برنامه نمایش آب و هوا "
        desc="برنامه ای برای نمایش آب و هوا که بروی سیستم عامل های گنو/لینوکس قابل اجراس "
        link="https://github.com/HarlyquinForest/Jweather"
        tags={['java', 'JavaFx', 'GNU/Linux']}
      />
      <Project
        title="شطرنج"
        desc="بازی محبوب شطرنج که به صورت تجربی با جاوا و سوینگ ساخته شده"
        link="https://github.com/HarlyquinForest/ChessGame"
        tags={['java', 'swing']}
      />
    </Masonry>
  )
}
const Project = ({ title, desc, link, tags }) => {
  return (
    <div
      key={title}
      className="font-body  text-right min-w-200 w-fit h-fit bg-half-transparent p-8 rounded-lg hover:-translate-y-1 transition-all cursor-pointer hover:text-primary"
    >
      <NextLink href={link}>
        <a target="_blank" className="w-full">
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center w-full">
              <span className="text-4xl text-primary">
                <BsFolder />
              </span>
              <span className="text-light-gray text-2xl hover:text-primary">
                <FiExternalLink />
              </span>
            </div>
            <h1 className="text-xl font-bold ">{title}</h1>
            <p className="text-light-gray text-justify mt-2">
              {desc}
            </p>
            <div className="flex flex-row flex-wrap gap-3 mt-10">
              {tags &&
                tags.map((item, index) => (
                  <span
                    key={index}
                    className="text-center rounded-lg bg-main-bg text-body  text-sm font-bold p-2 w-fit  lg:w-30 "
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>
        </a>
      </NextLink>
    </div>
  )
}

export default Projects

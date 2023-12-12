
const MenuItem = ({label, url}:{label:string, url: string}) : React.ReactNode=> {
    return <li>
            <a href={url} className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">
              {label}
            </a>
          </li>
}

export default function FooterMenu () {
    return(
      <ul className="flex flex-wrap items-center">
        <MenuItem label="Terms and condition" url="/term-condition"/>
        <MenuItem label="Privacy Policy" url="/privacy"/>
        <MenuItem label="Help" url="/href"/>
      </ul>
    )
  }
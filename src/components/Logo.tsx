import { FC } from "react"

interface LogoProps {
    size?: number
}
const Logo: FC<LogoProps> = ({ size }) => {
    return (
        <div className='flex flex-col justify-start'>
            <img src="./logoPokedex.png" alt=""
                className={`h-20 w-auto ${size === 1 ? 'm-auto' : ''}`}
            />
        </div>
    )
}

export default Logo
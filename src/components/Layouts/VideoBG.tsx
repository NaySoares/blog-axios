import Image from 'next/image'

// TODO: change video, right now it's just a picture
import videoBackground from '../../../public/walpaper.jpg'

interface IPropsVideoBG {
    children: React.ReactNode
}

export const VideoBG = ({children}: IPropsVideoBG) => {
    return (
        <>
            <div className="h-screen w-full absolute -z-50">
                <Image src={videoBackground} alt=""/>
            </div>
            <div>{children}</div>
        </>
    )
}
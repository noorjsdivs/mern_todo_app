interface Props{
    children: React.ReactNode;
}

const Container = ({children}:Props) => {
  return (
    <div  className="max-w-screen-xl mx-auto w-full h-screen flex items-center justify-center">{children}</div>
  )
}

export default Container
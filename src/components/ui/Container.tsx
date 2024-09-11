import { cn } from "@/lib/utils";

interface Props {
      children: React.ReactNode
      className?: string
}


const Container = ({ children, className }: Props) => {
      return (
            <div className={cn("max-w-screen-xl mx-auto lg:px-0 px-4", className)}>
                  {children}
            </div>
      )
}

export default Container

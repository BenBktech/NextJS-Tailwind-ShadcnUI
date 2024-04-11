import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const page = () => {
  return (
    <div>
        <h1 className="title">Contact</h1>
        <Input className="mb-1" type="email" placeholder="Object" />
        <Textarea className="mb-1" placeholder="Type your message here." />
        <Button className="w-full" variant="outline">Button</Button>
    </div>
  )
}

export default page
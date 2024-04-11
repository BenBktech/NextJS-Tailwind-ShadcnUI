import { RocketIcon } from "@radix-ui/react-icons"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export default function Home() {
  return (
    <Alert>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Hello!</AlertTitle>
      <AlertDescription>
        Welcome on this simple DApp
      </AlertDescription>
    </Alert>
  );
}

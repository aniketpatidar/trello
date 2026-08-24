import { Button } from "./Button";
import { Center } from "./Center";
import { Input } from "./Input";

export function AuthCredentials() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <div style={{ width: "100%" }}>
        <Center>
          <div style={{ fontSize: 30, padding: 20 }}>Log in to Trello</div>
        </Center>
        <Center>Connect to Trello with:</Center>
        <Center>
          <Input type="text" placeholder="Email" />
        </Center>
        <Center>
          <Input type="password" placeholder="Password" />
        </Center>
        <Center>
          <Button
            rightIcon={
              <img
                style={{ height: 20 }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png"
              />
            }
          >
            Signup
          </Button>
        </Center>
      </div>
    </div>
  );
}

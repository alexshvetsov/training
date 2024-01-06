// import React, { useState } from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardHeader from "@mui/material/CardHeader";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { Container, Box } from "@mui/material";
// import FormInterface from "../../components/form/types/form";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (event) => {
//     event.preventDefault();
//     console.log(username, password);
//   };

//   const formOptions: FormInterface = {
//     inputs: [
//       { name: "username", type: "text" },
//       { name: "password", type: "text",inputType:'password' },
//     ],
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box mt={5}>
//         <Card variant="outlined">
//           <CardHeader title="Login" />
//           <CardContent>
//             <form onSubmit={handleLogin}>
//               <TextField
//                 label="Username"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <TextField
//                 label="Password"
//                 type="password"
//                 variant="outlined"
//                 fullWidth
//                 margin="normal"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <Button
//                 type="submit"
//                 color="primary"
//                 variant="contained"
//                 fullWidth
//                 sx={{ mt: 2 }}
//               >
//                 Sign In
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </Box>
//     </Container>
//   );
// };

// export default Login;
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { Container, Box } from "@mui/material";
import FormInterface from "../../components/form/types/form";
import { TextInputInterface } from "../../components/form/types/text-input";
import Form from "../../components/form/form.tsx";
import { SelectInputInterface } from "../../components/form/types/select-input.ts";
const Login = () => {
  const handleLogin = (event) => {
    console.log(event);
  };
  const handleInputInteraction = (inputName: string, values:any) => {
    // console.log(inputName)
    // console.log(values)
  };


  const formOptions: FormInterface = {
    inputs: [
      {
        name: "username",
        label: "username",
        placeholder: "username",
        type: "text",
        textType: "text",
      } as TextInputInterface,
      {
        name: "select",
        label: "select",
        placeholder: "select",
        type: "select",
        options:[{value:'1',label:'1'},{value:'2',label:'2'},{value:'3',label:'3'}]
      } as SelectInputInterface,
      {
        name: "password",
        label: "password",
        placeholder: "password",
        type: "text",
        textType: "password",
      } as TextInputInterface,
    ],
    onSubmit: handleLogin,
    submitText: "login ",
    flexBox: {
      display: "flex",
      flexDirection:'column',
      gap:'10px'
    },
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Card variant="outlined">
          <CardHeader title="Login" />
          <CardContent>
            <Form form={formOptions} onInputInteraction={handleInputInteraction}/>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Login;

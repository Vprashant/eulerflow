import { useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUpPage({ onSwitchToLogin }) {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('email', email);

    try {
      const response = await axios.post('http://localhost:5001/signUp', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Sign up successful:', response.data);
      onSwitchToLogin();
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center w-full lg:max-w-lg mx-auto">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Sign up</CardTitle>
          <CardDescription className="text-center">
            Create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Name</Label>
            <Input id="username" type="text" placeholder="" value={username} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="w-full" onClick={handleSignUp}>Sign Up</Button>
        </CardFooter>
        <p className="mt-2 text-xs text-center text-gray-700 mb-2">
          Already have an account?{' '}
          <span className="text-blue-600 hover:underline cursor-pointer" onClick={onSwitchToLogin}>
            Sign in
          </span>
        </p>
      </Card>
    </div>
  );
}

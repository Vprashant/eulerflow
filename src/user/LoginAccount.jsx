import { useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from 'react-router-dom';
import SignUpPage from '@/user/SignUpPage';


export default function LoginAccount() {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSwitchToSignUp = () => {
    setIsLoginPage(false);
  };

  const handleSwitchToLogin = () => {
    setIsLoginPage(true);
  };

  const handleLogin = async () => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await axios.post('http://localhost:5001/login', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Login successful:', response.data);
      localStorage.setItem('userData', JSON.stringify(response.data));
      navigate('/dashboard'); 
    } catch (error) {
      console.error('Error logging in:', error);
    
    }
  };
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      <div className="w-full m-auto bg-white lg:max-w-lg">
        {isLoginPage ? (
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Sign in</CardTitle>
              <CardDescription className="text-center">
                Enter your email and password to login
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full" onClick={handleLogin}>Login</Button>
            </CardFooter>
            <div className="relative mb-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 m-2">
              <Button variant="outline">Github</Button>
              <Button variant="outline">Twitter</Button>
            </div>
            <p className="mt-2 text-xs text-center text-gray-700 mb-2">
              {' '}
              Don't have an account?{' '}
              <span className=" text-blue-600 hover:underline" onClick={handleSwitchToSignUp}>
                Sign up
              </span>
            </p>
          </Card>
        ) : (
          <SignUpPage onSwitchToLogin={handleSwitchToLogin} />
        )}
      </div>
    </div>
  );
}

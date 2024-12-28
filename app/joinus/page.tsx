"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import NikeLogo from "@/public/Nikelogo.svg";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ShopSidebar } from "@/components/sidebar";
const Section = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    country: "India",
    gender: "male",
    marketing: false,
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <section className="max-w-md mx-auto p-6 ">
      <div className="space-y-6">
        <div className="flex justify-center max-w-full w-full">
          <Image src={NikeLogo} alt="Logo" />
        </div>
        <h1 className="text-2xl font-bold flex w-full justify-center">
          BECOME A NIKE MEMBER
        </h1>

        <p className="text-sm text-gray-600">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration and community.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <Input
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <Input
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <Input
              type="date"
              placeholder="Date of Birth"
              value={formData.dateOfBirth}
              onChange={(e) =>
                setFormData({ ...formData, dateOfBirth: e.target.value })
              }
            />
            <p className="text-xs text-gray-500">
              Get a Nike Member Reward every year on your Birthday.
            </p>
          </div>
          <div className="space-y-2">
            <Select
              value={formData.country}
              onValueChange={(value) =>
                setFormData({ ...formData, country: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="India">India</SelectItem>
                <SelectItem value="USA">USA</SelectItem>
                <SelectItem value="UK">UK</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <RadioGroup
              value={formData.gender}
              onValueChange={(value) =>
                setFormData({ ...formData, gender: value })
              }
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">Female</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex items-start space-x-2 mt-4">
            <Checkbox
              id="marketing"
              checked={formData.marketing}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, marketing: checked as boolean })
              }
            />
            <Label
              htmlFor="marketing"
              className="text-xs leading-tight  font-normal"
            >
              Sign up for emails to get updates from Nike on products, offers
              and your Member benefits
            </Label>
          </div>
          <div className="text-xs text-gray-600">
            By creating an account, you agree to Nike's{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Terms of Use
            </a>
          </div>
          <Button
            type="submit"
            className="w-full bg-black text-white hover:bg-gray-800"
          >
            JOIN US
          </Button>
        </form>
      </div>
    </section>
  );
};
export default Section;

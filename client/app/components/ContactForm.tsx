"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Алдаа",
        description: "Имэйл хаяг буруу байна.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const phoneRegex = /^\d{8}$/;

    if (!phoneRegex.test(formData.phoneNumber)) {
      toast({
        title: "Алдаа",
        description: "Имэйл хаяг буруу байна.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(
        `https://portfolio-5jtl.onrender.com/api/send-email`,
        formData
      );
      if (response.status === 200) {
        toast({
          title: "Амжилттай илгээгдлээ",
          description: "Таны мессеж амжилттай илгээгдлээ!",
          variant: "default",
        });
        setFormData({ email: "", phoneNumber: "", message: "" });
      } else {
        throw new Error("Хүсэлт амжилтгүй боллоо");
      }
    } catch (error) {
      console.log("Error submitting form:", error);
      toast({
        title: "Алдаа гарлаа",
        description: "Уучлаарай, алдаа гарлаа. Дахин оролдоно уу.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Холбоо барих
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Имэйл хаяг</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your-email@mail.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Утасны дугаар</Label>
            <Input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              placeholder="99999999"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Мессеж</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Таны мессеж..."
              rows={4}
            />
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Илгээж байна..." : "Илгээх"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

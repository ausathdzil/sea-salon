'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Textarea } from './ui/textarea';
import { createReview } from '@/app/lib/actions';

const formSchema = z.object({
  name: z.string().min(2).max(50),
  rating: z.number().int().min(1).max(5),
  comment: z.string().min(2).max(500),
});

export default function ReviewForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      rating: 5,
      comment: '',
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('rating', data.rating.toString());
    formData.append('comment', data.comment);

    try {
      const response = await createReview(formData);
      form.reset();
    } catch (error) {
      console.error('Failed to create review:', error);
    }
  }

  return (
    <div className="bg-zinc-50 text-zinc-950 pt-12 flex flex-col justify-start w-full items-start gap-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Tell us what you think!</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rating</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(value) => field.onChange(Number(value))}
                        defaultValue={field.value.toString()}
                        className="flex flex-col lg:flex-row gap-4"
                      >
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <FormItem
                            key={rating}
                            className="flex items-end"
                          >
                            <FormControl>
                              <RadioGroupItem value={rating.toString()}>
                                {rating}
                              </RadioGroupItem>
                            </FormControl>
                            <FormLabel className="ml-2">{rating} ⭐</FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comment</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write your review here"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

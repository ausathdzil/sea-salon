'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTransition } from 'react';
import { createReview } from '@/lib/actions';

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { StarIcon } from '@heroicons/react/24/solid';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }).max(50),
  rating: z.number().int().min(1).max(5),
  comment: z.string().min(1, { message: 'Comment is required.' }).max(500),
});

export default function ReviewForm() {
  const [isPending, startTransition] = useTransition();

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
      startTransition(async () => {
        await createReview(formData);
        form.reset();
      });
    } catch (error) {
      console.error('Failed to create review:', error);
    }
  }

  return (
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
                  type="text"
                  placeholder="Input your name"
                  disabled={isPending}
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
                  disabled={isPending}
                >
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <FormItem
                      key={rating}
                      className="flex items-end justify-start"
                    >
                      <FormControl>
                        <RadioGroupItem value={rating.toString()}>
                          {rating}
                        </RadioGroupItem>
                      </FormControl>
                      <FormLabel className="ml-2 flex gap-2 items-end">
                        {rating}{' '}
                        <StarIcon
                          fill="orange"
                          className="w-4 h-4"
                        />
                      </FormLabel>
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
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="text-base"
          disabled={isPending}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}

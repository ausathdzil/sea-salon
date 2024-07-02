'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { createService } from '@/lib/actions';

export const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  duration: z.string().min(1, { message: 'Duration is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
});

export default function ServiceForm({ userId }: { userId: string }) {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      duration: '',
      description: '',
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsPending(true);

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('duration', data.duration);
    formData.append('description', data.description);

    try {
      await createService(formData, userId);
      form.reset();
      router.push(`/dashboard/admin/${userId}`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsPending(false);
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
                  type="name"
                  placeholder="Input service name"
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
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration</FormLabel>
              <FormControl>
                <Input
                  type="duration"
                  placeholder="Input service duration"
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  type="description"
                  placeholder="Input service description"
                  disabled={isPending}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-4">
          <Button
            type="submit"
            className="w-full"
            disabled={isPending}
          >
            Add Service
          </Button>
        </div>
      </form>
    </Form>
  );
}

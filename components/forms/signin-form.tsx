// 'use client';

// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import { useState } from 'react';
// import { login } from '@/lib/actions';

// import {
//   Form,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// export const formSchema = z.object({
//   email: z.string().email({ message: 'Email is required' }),
//   password: z.string().min(1, { message: 'Password is required' }),
// });

// export default function SignInForm() {
//   const router = useRouter();
//   const [isPending, setIsPending] = useState(false);

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: '',
//       password: '',
//     },
//   });

//   async function onSubmit(data: z.infer<typeof formSchema>) {
//     setIsPending(true);

//     const formData = new FormData();
//     formData.append('email', data.email);
//     formData.append('password', data.password);

//     try {
//       await login(formData);
//       form.reset();
//       router.push('/');
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsPending(false);
//     }
//   }

//   return (
//     <Form {...form}>
//       <form
//         onSubmit={form.handleSubmit(onSubmit)}
//         className="space-y-4"
//       >
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Email</FormLabel>
//               <FormControl>
//                 <Input
//                   type="email"
//                   placeholder="Input your email"
//                   disabled={isPending}
//                   {...field}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="password"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Password</FormLabel>
//               <FormControl>
//                 <Input
//                   type="password"
//                   placeholder="Input your password"
//                   disabled={isPending}
//                   {...field}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <div className="flex flex-col gap-4">
//           <Button
//             type="submit"
//             className="w-full"
//             disabled={isPending}
//           >
//             Sign In
//           </Button>
//           <Link
//             href="/register"
//             className="text-pink-500 hover:underline"
//           >
//             <p className="text-center">Don&apos;t have an account?</p>
//           </Link>
//         </div>
//       </form>
//     </Form>
//   );
// }

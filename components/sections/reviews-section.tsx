import { fetchReviews } from '@/lib/data';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import ReviewForm from '@/components/forms/review-form';

export default async function ReviewsSection() {
  const reviews = await fetchReviews();

  return (
    <section className="bg-zinc-50 text-zinc-950 p-8 sm:p-16 w-full">
      <div className="flex flex-col-reverse justify-center items-center gap-8 px-6 sm:px-16">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem
                key={review.id}
                className="lg:basis-1/3 md:basis-1/2 sm:basis-2/3 basis-full"
              >
                <Card className="border-2 border-orange-300">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <Avatar className="hidden sm:block">
                      <AvatarFallback>{review.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-2 items-start">
                      <CardTitle>{review.name}</CardTitle>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star, index) =>
                          star <= review.rating ? (
                            <StarSolid
                              key={index}
                              className="w-6 h-6"
                              fill="orange"
                            />
                          ) : (
                            <StarOutline
                              key={index}
                              className="w-6 h-6"
                              stroke="orange"
                            />
                          )
                        )}
                      </div>
                      <CardDescription className="text-base">
                        {review.comment}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <h1 className="text-6xl text-center md:text-right font-bold">
          What Our{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Clients
          </span>{' '}
          Say
        </h1>
      </div>
      <div className="bg-zinc-50 text-zinc-950 pt-12 flex flex-col justify-start w-full items-start gap-4">
        <Card className="w-full border-2 border-pink-500">
          <CardHeader>
            <CardTitle>Tell us what you think!</CardTitle>
          </CardHeader>
          <CardContent>
            <ReviewForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

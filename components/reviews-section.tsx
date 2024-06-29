import { fetchReviews } from '@/app/lib/data';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback } from './ui/avatar';
import { StarIcon as StarOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarSolid } from '@heroicons/react/24/solid';
import ReviewForm from './review-form';

export default async function ReviewsSection() {
  const reviews = await fetchReviews();

  return (
    <section
      id="reviews"
      className="bg-zinc-50 text-zinc-950 p-8 sm:p-16 scroll-mt-12 w-full"
    >
      <div className="flex flex-col-reverse justify-center items-center gap-8 px-16">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem
                key={index}
                className="lg:basis-1/3 md:basis-1/2 sm:basis-2/3 basis-full"
              >
                <Card>
                  <CardHeader className="flex flex-row items-start gap-4">
                    <Avatar>
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
          What Our Clients Say
        </h1>
      </div>
      <ReviewForm reviews={reviews} />
    </section>
  );
}

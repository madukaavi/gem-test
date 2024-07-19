// HorizontalCardScroll.tsx
import React, { useRef } from 'react';
import Card from './Card';

const HorizontalCardScroll: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'right' ? 300 : -300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative py-4 ">
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-pink-800 text-white p-2 rounded-full hover:bg-pink-800 focus:outline-none z-10"
      >
        &lt; Left
      </button>
      <div className="overflow-x-auto whitespace-nowrap scroll-smooth" ref={scrollRef}>
        <div className="flex space-x-4">
          <Card
            title="Card 1"
            content="categories"
            imageUrl="https://s3-alpha-sig.figma.com/img/b30b/fa3f/266c98b96164dabe95f5b047b3705e50?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SWGigKbi4JXvi8iZO8ScK6DSaIlwMl-NG-Pm9iAWqrDQ3oRCn7NKCdlrd6Q1mEXZcsk0ZBmWL830nR~s0DmWKfwYRKZcgw9IGgGS~NgIEjEjBpGVbJ2ziL--VjHJuuUUBI9ok6RVJYGLsTKYKGi8n1KFj9UqAStIfxqWzIBGw7a2XxwDjO6C9ykxLXyunsv0fRo4ZBVhn0X5gMOg4H9oCXZFhkK7OwXtGSuapXDcB688rNcgbEgyd5nodrcFdxpqskBRSRXXR7nitoPC6BfUrmDrSpGZnCBUtx3qAUggcLlYe1FDdqh7zCimKjrmG1msnSsol4uvJC-VEFbm8eTRjQ__"
            buttonText="Go To categories"
            additionalText="categories"
          />
          <Card
            title="Card 2"
            content="categories"
            imageUrl="https://s3-alpha-sig.figma.com/img/b30b/fa3f/266c98b96164dabe95f5b047b3705e50?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SWGigKbi4JXvi8iZO8ScK6DSaIlwMl-NG-Pm9iAWqrDQ3oRCn7NKCdlrd6Q1mEXZcsk0ZBmWL830nR~s0DmWKfwYRKZcgw9IGgGS~NgIEjEjBpGVbJ2ziL--VjHJuuUUBI9ok6RVJYGLsTKYKGi8n1KFj9UqAStIfxqWzIBGw7a2XxwDjO6C9ykxLXyunsv0fRo4ZBVhn0X5gMOg4H9oCXZFhkK7OwXtGSuapXDcB688rNcgbEgyd5nodrcFdxpqskBRSRXXR7nitoPC6BfUrmDrSpGZnCBUtx3qAUggcLlYe1FDdqh7zCimKjrmG1msnSsol4uvJC-VEFbm8eTRjQ__"
            buttonText="Go To categories"
            additionalText="categories"
          />
          <Card
            title="categories"
            content="categories."
            imageUrl="https://s3-alpha-sig.figma.com/img/b30b/fa3f/266c98b96164dabe95f5b047b3705e50?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SWGigKbi4JXvi8iZO8ScK6DSaIlwMl-NG-Pm9iAWqrDQ3oRCn7NKCdlrd6Q1mEXZcsk0ZBmWL830nR~s0DmWKfwYRKZcgw9IGgGS~NgIEjEjBpGVbJ2ziL--VjHJuuUUBI9ok6RVJYGLsTKYKGi8n1KFj9UqAStIfxqWzIBGw7a2XxwDjO6C9ykxLXyunsv0fRo4ZBVhn0X5gMOg4H9oCXZFhkK7OwXtGSuapXDcB688rNcgbEgyd5nodrcFdxpqskBRSRXXR7nitoPC6BfUrmDrSpGZnCBUtx3qAUggcLlYe1FDdqh7zCimKjrmG1msnSsol4uvJC-VEFbm8eTRjQ__"
            buttonText="Go To categories"
            additionalText="categories"
          />
          <Card
            title="Card 4"
            content="categories"
            imageUrl="https://s3-alpha-sig.figma.com/img/b30b/fa3f/266c98b96164dabe95f5b047b3705e50?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SWGigKbi4JXvi8iZO8ScK6DSaIlwMl-NG-Pm9iAWqrDQ3oRCn7NKCdlrd6Q1mEXZcsk0ZBmWL830nR~s0DmWKfwYRKZcgw9IGgGS~NgIEjEjBpGVbJ2ziL--VjHJuuUUBI9ok6RVJYGLsTKYKGi8n1KFj9UqAStIfxqWzIBGw7a2XxwDjO6C9ykxLXyunsv0fRo4ZBVhn0X5gMOg4H9oCXZFhkK7OwXtGSuapXDcB688rNcgbEgyd5nodrcFdxpqskBRSRXXR7nitoPC6BfUrmDrSpGZnCBUtx3qAUggcLlYe1FDdqh7zCimKjrmG1msnSsol4uvJC-VEFbm8eTRjQ__"
            buttonText="Go To categories"
            additionalText="categories"
          />
        </div>
      </div>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-pink-800 text-white p-2 rounded-full hover:bg-pink-800 focus:outline-none z-10"
      >
        Right &gt;
      </button>
    </div>
  );
};

export default HorizontalCardScroll;

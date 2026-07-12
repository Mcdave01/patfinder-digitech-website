import Image from "next/image";
import { Calendar,MapPin } from "lucide-react";
import { EventRecord } from "@/lib/types";

function formatDate(date: String){
    return new Date(date + 'T00:00:00').toLocaleDateString(undefined,{
        year : 'numeric',
        month : 'long',
        day : 'numeric'
    })
}

// Below is category Label 
const CATEGORY_LABEL : Record<EventRecord['category'],string>={
    upcoming : 'Upcoming',
    latest:  'Latest Event',
    previous: 'Previous'
};

export default function EventCard({
  event,
  featured = false
} : {
    event: EventRecord,
    featured ?: boolean
}){
    if(featured){
        return (
            <div className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl overflow-hidden
             border-2 border-[hsl(var(--border))]
              hover:border-[hsl(var(--primary))] hover:shadow-xl transition-all duration-300">
        <div className="relative h-64 lg:h-full min-h-[280px]">
          <Image
            src={event.image_url || '/placeholder.svg'}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-4 left-4 px-3 py-1 bg-[hsl(var(--primary))] text-white text-xs font-semibold rounded-full">
            {CATEGORY_LABEL[event.category]}
          </span>
        </div>
        <div className="p-8 flex flex-col justify-center bg-[hsl(var(--muted))]">
          <h3 className="heading-sm mb-3">{event.title}</h3>
          {event.description && (
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-5">
              {event.description}
            </p>
          )}
          <div className="flex flex-col gap-2 text-sm text-[hsl(var(--muted-foreground))]">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {formatDate(event.event_date)}
            </div>
            {event.location && (
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                {event.location}
              </div>
            )}
          </div>
        </div>
      </div>
    );
    }

     return (
    <article className="group bg-white border-2 border-[hsl(var(--border))] rounded-xl overflow-hidden hover:border-[hsl(var(--primary))] hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.image_url || '/placeholder.svg'}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 text-[hsl(var(--primary))] text-xs font-semibold rounded-full">
          {CATEGORY_LABEL[event.category]}
        </span>
      </div>
      <div className="p-6">
        <h3 className="heading-sm mb-3 line-clamp-2">{event.title}</h3>
        {event.description && (
          <p className="text-[hsl(var(--muted-foreground))] text-sm leading-relaxed mb-4 line-clamp-3">
            {event.description}
          </p>
        )}
        <div className="flex flex-col gap-2 text-xs text-[hsl(var(--muted-foreground))]">
          <div className="flex items-center gap-1.5">
            <Calendar size={14} />
            {formatDate(event.event_date)}
          </div>
          {event.location && (
            <div className="flex items-center gap-1.5">
              <MapPin size={14} />
              {event.location}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}


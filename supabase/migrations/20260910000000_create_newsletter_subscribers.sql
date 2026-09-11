create table public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) >= 2),
  email text not null check (char_length(trim(email)) <= 320),
  created_at timestamptz not null default timezone('utc', now())
);

create unique index newsletter_subscribers_email_lower_idx
  on public.newsletter_subscribers (lower(trim(email)));

alter table public.newsletter_subscribers enable row level security;

revoke all on table public.newsletter_subscribers from anon, authenticated;
grant insert on table public.newsletter_subscribers to anon, authenticated;

create policy "Anyone can subscribe to the newsletter"
  on public.newsletter_subscribers
  for insert
  to anon, authenticated
  with check (
    char_length(trim(name)) >= 2
    and char_length(trim(email)) between 3 and 320
  );

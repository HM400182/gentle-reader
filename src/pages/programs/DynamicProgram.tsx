import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const DynamicProgram = () => {
  const { slug } = useParams<{ slug: string }>();
  const [program, setProgram] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    supabase
      .from('programs')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single()
      .then(({ data }) => {
        setProgram(data);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </Layout>
  );

  if (!program) return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <h2 className="text-2xl font-bold mb-4">Program Not Found</h2>
          <p className="text-muted-foreground mb-6">This program doesn't exist or has been unpublished.</p>
          <Link to="/"><Button><ArrowLeft className="w-4 h-4 mr-2" />Back to Home</Button></Link>
        </div>
      </div>
    </Layout>
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="relative hero-gradient text-white py-20 min-h-[40vh] flex items-center">
        {program.image_url && (
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" style={{ backgroundImage: `url(${program.image_url})` }} />
        )}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">{program.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {program.image_url && (
            <img
              src={program.image_url}
              alt={program.title}
              className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-10 shadow-lg"
            />
          )}
          {program.description && (
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed text-lg whitespace-pre-line">{program.description}</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default DynamicProgram;

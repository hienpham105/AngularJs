using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularJSSample.Startup))]
namespace AngularJSSample
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

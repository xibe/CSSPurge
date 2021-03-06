var Progress = React.createClass({
  
  render: function() {
    return (
<tr className={this.props.classname}>
<td className="lp">{this.props.position}</td>
<td className="ls tl">{this.props.name}</td>
<td className="lf">{this.props.floats}</td>
<td className="lc">{this.props.uniquecolors}</td>
<td className="lfs">{this.props.fontsizes}</td>
<td className="lff">{this.props.fontfamilies}</td>
<td className="lsp">{this.props.specificity}</td>
<td className="lmq">{this.props.mediaqueries}</td>
<td className="lst">{this.props.styletags}</td>
<td className="lsl">{this.props.stylelinks}</td>
<td className="lfskb">{this.props.filesizekb}</td>
<td className="lts">{this.props.totalscore}</td>
<td>
<a href={this.props.link}>
<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13.636" viewBox="80 96 15 13.636" enable-background="new 80 96 15 13.636">
                      <title>CSS stats</title>
                      <path d="M80 106.909h2.727v2.727h-2.727zM84.091 104.182h2.728v5.455h-2.728zM88.182 100.091h2.728v9.545h-2.728zM92.273 96h2.727v13.636h-2.727z"/>
                  </svg>
</a>
</td>
</tr>
   );
  }
});

// CSSStats links
var airbnbStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fwww.airbnb.com",
    appleStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fapple.com&name=Apple",
    basscssStats = "http://www.cssstats.com/stats?link=http%3A%2F%2Fd2v52k3cl9vedd.cloudfront.net%2Fbasscss%2F4.1.4%2Fbasscss.min.css&name=Basscss",
    bbcStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fwww.bbc.co.uk",
    bootstrapStats = "http://www.cssstats.com/stats?link=http%3A%2F%2Fmaxcdn.bootstrapcdn.com%2Fbootstrap%2F3.3.1%2Fcss%2Fbootstrap.min.css&name=Bootstrap",
    csstricksStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fcss-tricks.com",
    dribbbleStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fwww.dribbble.com",
    dropboxStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fdropbox.com",
    etsyStats = "http://cssstats.com/stats?url=http%3A%2F%2Fetsy.com&name=Etsy",
    facebookStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Ffacebook.com&name=Facebook",
    githubStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fgithub.com&name=GitHub",
    googleStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fgoogle.com&name=Google",
    imdbStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fimdb.com",
    kickstarterStats = "http://cssstats.com/stats?url=http%3A%2F%2Fkickstarter.com&name=Kickstarter",
    mediumStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fmedium.com&name=Medium",
    paypalStats = "http://cssstats.com/stats?url=http%3A%2F%2Fpaypal.com&name=PayPal",
    pinterestStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fpinterest.com&name=Pinterest",
    purecssStats = "http://www.cssstats.com/stats?link=http%3A%2F%2Fyui.yahooapis.com%2Fpure%2F0.5.0%2Fpure-min.css&name=Pure%20CSS",
    slackStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fwww.slack.com",
    smashingmagazineStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fsmashingmagazine.com",
    stackoverflowStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fstackoverflow.com&name=Stack%20Overflow",
    stripeStats = "http://cssstats.com/stats?url=http%3A%2F%2Fstripe.com&name=Stripe",
    tachyonsStats = "http://www.cssstats.com/stats?link=http%3A%2F%2Ftachyons.io%2Fcss%2Ftachyons.min.css&name=Tachyons",
    theguardianStats = "http://cssstats.com/stats?url=http%3A%2F%2Ftheguardian.com&name=The%20Guardian",
    twitterStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Ftwitter.com&name=Twitter",
    ufcStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fufc.com",
    unsplashStats = "http://www.cssstats.com/stats?link=http%3A%2F%2Fmaxcdn.bootstrapcdn.com%2Fbootstrap%2F3.3.1%2Fcss%2Fbootstrap.min.css&name=Bootstrap",
    wikipediaStats = "http://cssstats.com/stats?url=http%3A%2F%2Fwww.wikipedia.org&name=Wikipedia",
    yahooStats = "http://cssstats.com/stats?url=http%3A%2F%2Fyahoo.com&name=Yahoo",
    youtubeStats = "http://cssstats.com/stats?url=http%3A%2F%2Fyoutube.com&name=YouTube", 	
    iminStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fwww.imin.co&ua=Browser%20Default",
    futuriceStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Ffuturice.com&ua=Browser%20Default",
    skyscannerStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fwww.skyscanner.net&ua=Browser%20Default",
    streetlifeStats = "http://www.cssstats.com/stats?url=https%3A%2F%2Fwww.streetlife.com&ua=Browser%20Default",
    citypantryStats = "http://www.cssstats.com/stats?url=https%3A%2F%2Fcitypantry.com&ua=Browser%20Default",
    fooditStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fwww.foodit.com&ua=Browser%20Default",
    duedilStats = "http://www.cssstats.com/stats?url=https%3A%2F%2Fwww.duedil.com&ua=Browser%20Default",
    zooplaStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fwww.zoopla.co.uk&ua=Browser%20Default",
    siliconmrStats = "http://www.cssstats.com/stats?url=https%3A%2F%2Fwww.siliconmilkroundabout.com&ua=Browser%20Default",
    signalukStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fsignal.uk.com&ua=Browser%20Default",
    marvelappStats = "http://www.cssstats.com/stats?url=http%3A%2F%2Fmarvelapp.com&ua=Browser%20Default",
    rightmoveStats = "http://cssstats.com/stats?url=http%3A%2F%2Fwww.rightmove.co.uk&ua=Browser%20Default",
    marketinvoiceStats = "http://cssstats.com/stats?url=https%3A%2F%2Fwww.marketinvoice.com&ua=Browser%20Default"

// Totalscores
// 79
// var basscssScore = floats + colors + fontsizes + fontfamilies + specificity + mediaqueries + styletags + stylelinks + filesize;

var ProgressList = React.createClass({
  getInitialState: function() {
    return {
      productList: [
{classname: "basscss black", position: 1, name: "Basscss", floats: 10, uniquecolors: 10, fontsizes: 8, fontfamilies: 3, specificity: 30, mediaqueries: 3, styletags: 0, stylelinks: 1, filesizekb: 14, totalscore: 79, link:(basscssStats) },
{classname: "purecss black", position: 2, name: "Pure CSS", floats: 1, uniquecolors: 13, fontsizes: 14, fontfamilies: 7, specificity: 51, mediaqueries: 2, styletags: 0, stylelinks: 1, filesizekb: 18, totalscore: 89, link:(purecssStats) },
{classname: "tachyons black", position: 3, name: "Tachyons", floats: 12, uniquecolors: 31, fontsizes: 13, fontfamilies: 12, specificity: 30, mediaqueries: 3, styletags: 0, stylelinks: 1, filesizekb: 40, totalscore: 142, link:(tachyonsStats) },
{classname: "unsplash black", position: 4, name: "Unsplash", floats: 63, uniquecolors: 23, fontsizes: 29, fontfamilies: 7, specificity: 60, mediaqueries: 9, styletags: 0, stylelinks: 1, filesizekb: 114, totalscore: 252, link:(unsplashStats) },
{classname: "foodit", position: 5, name: "Foodit", floats: 25, uniquecolors: 7, fontsizes: 50, fontfamilies: 3, specificity: 130, mediaqueries: 11, styletags: 0, stylelinks: 1, filesizekb: 70, totalscore: 297, link:(fooditStats) }, 
{classname: "wikipedia black", position: 6, name: "Wikipedia", floats: 4, uniquecolors: 20, fontsizes: 21, fontfamilies: 3, specificity: 210, mediaqueries: 13, styletags: 3, stylelinks: 0, filesizekb: 32, totalscore: 306, link:(wikipediaStats) },
{classname: "bootstrap black", position: 7, name: "Bootstrap", floats: 38, uniquecolors: 36, fontsizes: 23, fontfamilies: 7, specificity: 83, mediaqueries: 12, styletags: 0, stylelinks: 1, filesizekb: 111, totalscore: 311, link:(bootstrapStats) },
{classname: "futurice", position: 8, name: "Futurice", floats: 19, uniquecolors: 73, fontsizes: 44, fontfamilies: 7, specificity: 100, mediaqueries: 23, styletags: 0, stylelinks: 1, filesizekb: 71, totalscore: 338, link:(futuriceStats) },
{classname: "stripe", position: 9, name: "Stripe", floats: 3, uniquecolors: 28, fontsizes: 22, fontfamilies: 4, specificity: 214, mediaqueries: 4, styletags: 0, stylelinks: 3, filesizekb: 70, totalscore: 348, link:(stripeStats) },
{classname: "google", position: 10, name: "Google", floats: 12, uniquecolors: 32, fontsizes: 19, fontfamilies: 5, specificity: 220, mediaqueries: 4, styletags: 8, stylelinks: 0, filesizekb: 65, totalscore: 365, link:(googleStats) },
{classname: "smashingmagazine", position: 11, name: "Smashing Magazine", floats: 40, uniquecolors: 46, fontsizes: 26, fontfamilies: 10, specificity: 200, mediaqueries: 10, styletags: 2, stylelinks: 2, filesizekb: 56, totalscore: 392, link:(smashingmagazineStats) },
{classname: "siliconmr", position: 12, name: "Silicon Milk Roundabout", floats: 60, uniquecolors: 59, fontsizes: 37, fontfamilies: 13, specificity: 111, mediaqueries: 17, styletags: 0, stylelinks: 3, filesizekb: 211, totalscore: 511, link:(siliconmrStats) }, 
{classname: "marvelapp", position: 13, name: "Marvel", floats: 13, uniquecolors: 63, fontsizes: 28, fontfamilies: 8, specificity: 121, mediaqueries: 15, styletags: 1, stylelinks: 2, filesizekb: 288, totalscore: 539, link:(marvelappStats) }, 
{classname: "csstricks black", position: 14, name: "CSS-Tricks", floats: 57, uniquecolors: 52, fontsizes: 49, fontfamilies: 5, specificity: 241, mediaqueries: 6, styletags: 1, stylelinks: 2, filesizekb: 173, totalscore: 559, link:(csstricksStats) },
{classname: "paypal", position: 15, name: "PayPal", floats: 38, uniquecolors: 41, fontsizes: 69, fontfamilies: 29, specificity: 222, mediaqueries: 21, styletags: 1, stylelinks: 1, filesizekb: 244, totalscore: 666, link:(paypalStats) },
{classname: "marketinvoice black", position: 16, name: "Marketinvoice", floats: 165, uniquecolors: 47, fontsizes: 71, fontfamilies: 17, specificity: 121, mediaqueries: 71, styletags: 0, stylelinks: 1, filesizekb: 200, totalscore: 693, link:(marketinvoiceStats)}, 
{classname: "skyscanner black", position: 17, name: "Skyscanner", floats: 100, uniquecolors: 32, fontsizes: 38, fontfamilies: 10, specificity: 322, mediaqueries: 25, styletags: 1, stylelinks: 6, filesizekb: 180, totalscore: 714, link:(skyscannerStats) }, 
{classname: "slack", position: 18, name: "Slack", floats: 31, uniquecolors: 90, fontsizes: 59, fontfamilies: 7, specificity: 311, mediaqueries: 40, styletags: 0, stylelinks: 4, filesizekb: 188, totalscore: 730, link:(slackStats) },
{classname: "imdb", position: 19, name: "IMDB", floats: 124, uniquecolors: 79, fontsizes: 49, fontfamilies: 18, specificity: 312, mediaqueries: 2, styletags: 0, stylelinks: 7, filesizekb: 170, totalscore: 761, link:(imdbStats) },
{classname: "apple black", position: 20, name: "Apple", floats: 38, uniquecolors: 16, fontsizes: 32, fontfamilies: 31, specificity: 270, mediaqueries: 44, styletags: 0, stylelinks: 5, filesizekb: 362, totalscore: 798, link:(appleStats) },
{classname: "facebook", position: 21, name: "Facebook", floats: 69, uniquecolors: 53, fontsizes: 27, fontfamilies: 24, specificity: 241, mediaqueries: 4, styletags: 1, stylelinks: 7, filesizekb: 389, totalscore: 815, link:(facebookStats) },
{classname: "yahoo", position: 22, name: "Yahoo", floats: 28, uniquecolors: 140, fontsizes: 72, fontfamilies: 12, specificity: 230, mediaqueries: 20, styletags: 7, stylelinks: 2, filesizekb: 312, totalscore: 823, link:(yahooStats) },
{classname: "airbnb", position: 23, name: "Airbnb", floats: 84, uniquecolors: 43, fontsizes: 50, fontfamilies: 11, specificity: 300, mediaqueries: 17, styletags: 0, stylelinks: 2, filesizekb: 356, totalscore: 863, link:(airbnbStats) },
{classname: "dropbox", position: 24, name: "Dropbox", floats: 37, uniquecolors: 26, fontsizes: 21, fontfamilies: 4, specificity: 510, mediaqueries: 9, styletags: 2, stylelinks: 17, filesizekb: 272, totalscore: 898, link:(dropboxStats) },
{classname: "bbc black", position: 25, name: "BBC", floats: 58, uniquecolors: 54, fontsizes: 60, fontfamilies: 18, specificity: 350, mediaqueries: 74, styletags: 1, stylelinks: 6, filesizekb: 288, totalscore: 909, link:(bbcStats) },
{classname: "rightmove", position: 26, name: "Rightmove", floats: 134, uniquecolors: 48, fontsizes: 73, fontfamilies: 11, specificity: 510, mediaqueries: 6, styletags: 0, stylelinks: 2, filesizekb: 166, totalscore: 950, link:(rightmoveStats) },
{classname: "zoopla", position: 27, name: "Zoopla", floats: 227, uniquecolors: 81, fontsizes: 63, fontfamilies: 15, specificity: 300, mediaqueries: 4, styletags: 1, stylelinks: 3, filesizekb: 271, totalscore: 965, link:(zooplaStats) }, 
{classname: "ufc black", position: 28, name: "UFC", floats: 141, uniquecolors: 53, fontsizes: 37, fontfamilies: 4, specificity: 510, mediaqueries: 2, styletags: 0, stylelinks: 7, filesizekb: 217, totalscore: 971, link:(ufcStats) },
{classname: "medium", position: 29, name: "Medium", floats: 69, uniquecolors: 51, fontsizes: 57, fontfamilies: 10, specificity: 110, mediaqueries: 35, styletags: 0, stylelinks: 2, filesizekb: 674, totalscore: 1008, link:(mediumStats) },
{classname: "youtube", position: 30, name: "Youtube", floats: 210, uniquecolors: 49, fontsizes: 30, fontfamilies: 4, specificity: 440, mediaqueries: 24, styletags: 1, stylelinks: 4, filesizekb: 441, totalscore: 1093, link:(youtubeStats) },
{classname: "etsy", position: 31, name: "Etsy", floats: 232, uniquecolors: 91, fontsizes: 54, fontfamilies: 18, specificity: 244, mediaqueries: 50, styletags: 1, stylelinks: 5, filesizekb: 507, totalscore: 1202, link:(etsyStats) },
{classname: "dribbble", position: 32, name: "Dribbble", floats: 313, uniquecolors: 51, fontsizes: 41, fontfamilies: 5, specificity: 355, mediaqueries: 49, styletags: 0, stylelinks: 5, filesizekb: 385, totalscore: 1204, link:(dribbbleStats) },
{classname: "twitter", position: 33, name: "Twitter", floats: 280, uniquecolors: 78, fontsizes: 49, fontfamilies: 14, specificity: 202, mediaqueries: 29, styletags: 0, stylelinks: 3, filesizekb: 623, totalscore: 1278, link:(twitterStats) },
{classname: "github", position: 34, name: "Github", floats: 399, uniquecolors: 151, fontsizes: 63, fontfamilies: 17, specificity: 110, mediaqueries: 12, styletags: 0, stylelinks: 4, filesizekb: 534, totalscore: 1290, link:(githubStats) },
{classname: "theguardian black", position: 35, name: "The Guardian", floats: 307, uniquecolors: 69, fontsizes: 38, fontfamilies: 16, specificity: 150, mediaqueries: 36, styletags: 8, stylelinks: 3, filesizekb: 697, totalscore: 1324, link:(theguardianStats) },
{classname: "stackoverflow", position: 36, name: "Stack Overflow", floats: 216, uniquecolors: 176, fontsizes: 40, fontfamilies: 9, specificity: 311, mediaqueries: 4, styletags: 0, stylelinks: 1, filesizekb: 600, totalscore: 1357, link:(stackoverflowStats) },
{classname: "streetlife black", position: 37, name: "Streetlife", floats: 250, uniquecolors: 68, fontsizes: 47, fontfamilies: 15, specificity: 320, mediaqueries: 18, styletags: 0, stylelinks: 4, filesizekb: 770, totalscore: 1492, link:(streetlifeStats) }, 
{classname: "duedil black", position: 38, name: "Duedil", floats: 305, uniquecolors: 199, fontsizes: 68, fontfamilies: 5, specificity: 630, mediaqueries: 33, styletags: 0, stylelinks: 4, filesizekb: 627, totalscore: 1871, link:(duedilStats) }, 
{classname: "signaluk black", position: 39, name: "Signal UK", floats: 236, uniquecolors: 125, fontsizes: 75, fontfamilies: 19, specificity: 385, mediaqueries: 53, styletags: 5, stylelinks: 15, filesizekb: 946, totalscore: 1859, link:(signalukStats) }, 
{classname: "pinterest", position: 40, name: "Pinterest", floats: 448, uniquecolors: 127, fontsizes: 76, fontfamilies: 16, specificity: 121, mediaqueries: 33, styletags: 1, stylelinks: 5, filesizekb: 1180, totalscore: 2007, link:(pinterestStats) },
{classname: "kickstarter", position: 41, name: "Kickstarter", floats: 462, uniquecolors: 87, fontsizes: 89, fontfamilies: 23, specificity: 512, mediaqueries: 51, styletags: 0, stylelinks: 1, filesizekb: 991, totalscore: 2016, link:(kickstarterStats) }
     ]
    };
  },

  render: function() {
    var products = this.state.productList.map(function(product) {
      return (
        <Progress classname={product.classname} position={product.position} name={product.name} casestudy={product.casestudy} floats={product.floats} uniquecolors={product.uniquecolors} fontsizes={product.fontsizes} fontfamilies={product.fontfamilies} specificity={product.specificity} mediaqueries={product.mediaqueries} styletags={product.styletags} stylelinks={product.stylelinks} filesizekb={product.filesizekb} totalscore={product.totalscore} link={product.link}/>
        );
    });

    return (
      <table className="bb b--light-gray">
      <thead>
      <tr>
        <th><button className="sort asc" data-sort="lp">&nbsp;<span></span></button></th>
        <th><button className="sort tl" data-sort="ls">Name <span></span></button></th>
        <th><button className="sort tr" data-sort="lf">Floats <span></span></button></th>
        <th><button className="sort tr" data-sort="lc">Unique Colors <span></span></button></th>
        <th><button className="sort tr" data-sort="lfs">Font Sizes <span></span></button></th>
        <th><button className="sort tr" data-sort="lff">Font Families <span></span></button></th>
        <th><button className="sort tr" data-sort="lsp">Specificity <span></span></button></th>
        <th><button className="sort tr" data-sort="lmq">Media Queries <span></span></button></th>
        <th><button className="sort tr" data-sort="lst">Style Tags <span></span></button></th>
        <th><button className="sort tr" data-sort="lsl">Style Links <span></span></button></th>
        <th><button className="sort tr" data-sort="lfskb">File Size kb <span></span></button></th>
        <th><button className="sort tr" data-sort="lts">Total Score <span></span></button></th>
      <th></th>
      </tr>
      </thead>
      <tbody className="list">
        {products}
      </tbody>
</table>
    );
  }
});

ReactDOM.render(<ProgressList/>, document.getElementById("component-league"));

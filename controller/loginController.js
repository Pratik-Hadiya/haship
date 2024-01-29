import crypto from "crypto";

const loginController = {
    async login(req,res,next) {
        try{
            console.log('request.headers - ', req.headers);
            console.log('connection - ', req.headers.connection);
            console.log('req.ip - ', req.ip);
            console.log('req.connection.remoteAddress - ', req.connection.remoteAddress);

            const headersToInclude = {
                host: req.get('host'),
                connection: req.get('connection'),
                'cache-control': req.get('cache-control'),
                'sec-ch-ua': req.get('sec-ch-ua'),
                'sec-ch-ua-mobile': req.get('sec-ch-ua-mobile'),
                'sec-ch-ua-platform': req.get('sec-ch-ua-platform'),
                'upgrade-insecure-requests': req.get('upgrade-insecure-requests'),
                'user-agent': req.get('user-agent'),
                accept: req.get('accept'),
                'sec-fetch-site': req.get('sec-fetch-site'),
                'sec-fetch-mode': req.get('sec-fetch-mode'),
                'sec-fetch-user': req.get('sec-fetch-user'),
                'sec-fetch-dest': req.get('sec-fetch-dest'),
                'accept-encoding': req.get('accept-encoding'),
                'accept-language': req.get('accept-language'),
                cookie: req.get('cookie'),
                // Add more headers as needed
              };

            const sessionIdComponents = [
                req.ip,
                headersToInclude,
              ];
            
              const rawSessionId = sessionIdComponents.join('|');
            //   console.log(rawSessionId);
            
              // Use a hash function (e.g., SHA-256) to create a fixed-size hash
              const hashedSessionId = crypto.createHash('sha256').update(rawSessionId).digest('hex');

            res.status(200).json({ data: hashedSessionId });
        }catch(err){
            console.log(err);
            res.status(500).json({ error: "Internal Server Error!" });
        }
    }
};
export default loginController;
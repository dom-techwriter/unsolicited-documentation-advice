require 'belvo'

belvo = Belvo::Client.new(
  'your-secret-id',
  'your-secret-password',
  'sandbox'
)

begin
    new_link = belvo.links.register( # Creating the link
        institution: 'banamex_mx_retail', 
        username: 'janedoe', 
        password: 'super-secret',
        options: { access_mode: Belvo::Link::AccessMode::SINGLE }
        )
    
    belvo.accounts.retrieve(link: new_link['id'])

    puts belvo.accounts.list
rescue Belvo::RequestError => e
    puts e.status_code
    puts e.detail
end